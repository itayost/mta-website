'use client'

import { useState, useEffect, useMemo } from 'react'
import { formatILS, formatDateHe } from '@/lib/formatters'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import type { BoiRateResponse } from '@/app/api/boi-rate/route'

const termOptions = Array.from({ length: 30 }, (_, i) => i + 1)

export function SavingsCalculator() {
  const [depositInput, setDepositInput] = useState('')
  const [monthlyInput, setMonthlyInput] = useState('')
  const [term, setTerm] = useState('5')
  const [rateInput, setRateInput] = useState('')
  const [boiRate, setBoiRate] = useState<BoiRateResponse | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/boi-rate')
      .then((res) => res.json())
      .then((data: BoiRateResponse) => {
        setBoiRate(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const effectiveRate = useMemo(() => {
    if (rateInput) {
      const parsed = parseFloat(rateInput)
      if (!isNaN(parsed) && parsed > 0) return parsed
    }
    return boiRate?.rate ?? null
  }, [rateInput, boiRate])

  const deposit = useMemo(() => {
    const num = parseFloat(depositInput.replace(/,/g, ''))
    return isNaN(num) ? 0 : Math.max(0, num)
  }, [depositInput])

  const monthly = useMemo(() => {
    const num = parseFloat(monthlyInput.replace(/,/g, ''))
    return isNaN(num) ? 0 : Math.max(0, num)
  }, [monthlyInput])

  const result = useMemo(() => {
    if ((deposit === 0 && monthly === 0) || !effectiveRate) return null

    const years = parseInt(term)
    const monthlyRate = effectiveRate / 100 / 12
    const totalMonths = years * 12

    // FV of lump sum: PV × (1 + r)^n
    const fvDeposit = deposit * Math.pow(1 + monthlyRate, totalMonths)

    // FV of annuity (monthly contributions): PMT × ((1 + r)^n - 1) / r
    const fvMonthly =
      monthlyRate > 0
        ? monthly * (Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate
        : monthly * totalMonths

    const futureValue = fvDeposit + fvMonthly
    const totalContributions = deposit + monthly * totalMonths
    const totalInterest = futureValue - totalContributions

    return {
      futureValue,
      totalContributions,
      totalInterest,
    }
  }, [deposit, monthly, effectiveRate, term])

  return (
    <Card className="max-w-lg mx-auto">
      <h2 className="font-display text-2xl font-extrabold tracking-tight text-text-primary mb-6">
        מחשבון חיסכון
      </h2>

      {loading && (
        <div className="h-10 rounded-lg bg-bg-surface animate-pulse mb-4" />
      )}

      {boiRate && !loading && (
        <p className="text-sm text-text-muted mb-4">
          ריבית בנק ישראל נוכחית:{' '}
          <span className="font-bold text-primary">{boiRate.rate.toFixed(2)}%</span>
          <span className="text-text-muted/50 text-xs"> · {formatDateHe(boiRate.lastUpdate)}</span>
        </p>
      )}

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="הפקדה ראשונית (₪)"
          name="initial-deposit"
          type="text"
          inputMode="decimal"
          placeholder="100,000"
          value={depositInput}
          onChange={(e) => setDepositInput(e.target.value)}
        />
        <Input
          label="הפקדה חודשית (₪)"
          name="monthly-addition"
          type="text"
          inputMode="decimal"
          placeholder="0"
          value={monthlyInput}
          onChange={(e) => setMonthlyInput(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <Select
          label="תקופה (שנים)"
          id="savings-term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        >
          {termOptions.map((y) => (
            <option key={y} value={String(y)}>
              {y}
            </option>
          ))}
        </Select>
        <Input
          label="ריבית שנתית (%)"
          name="savings-rate"
          type="text"
          inputMode="decimal"
          placeholder={boiRate ? boiRate.rate.toFixed(2) : '4.0'}
          value={rateInput}
          onChange={(e) => setRateInput(e.target.value)}
        />
      </div>

      {result && (
        <div className="mt-6 space-y-3 rounded-xl bg-bg-surface p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-text-muted">ערך עתידי</span>
            <span className="text-xl font-bold text-primary">
              ₪{formatILS(result.futureValue)}
            </span>
          </div>
          <div className="flex items-center justify-between border-t border-text-muted/10 pt-3">
            <span className="text-sm text-text-muted">סה״כ הפקדות</span>
            <span className="text-lg font-semibold text-text-primary">
              ₪{formatILS(result.totalContributions)}
            </span>
          </div>
          <div className="flex items-center justify-between border-t border-text-muted/10 pt-3">
            <span className="text-sm text-text-muted">רווח מריבית</span>
            <span className="text-lg font-semibold text-success">
              ₪{formatILS(result.totalInterest)}
            </span>
          </div>
        </div>
      )}
    </Card>
  )
}
