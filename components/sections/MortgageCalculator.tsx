'use client'

import { useState, useEffect, useMemo } from 'react'
import { formatILS, formatDateHe } from '@/lib/formatters'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { cn } from '@/lib/utils'
import type { MortgageRatesResponse } from '@/app/api/mortgage-rates/route'

const RATE_KEYS = ['NI|F', 'NI|V', 'CPI|F', 'CPI|V'] as const
type RateKey = (typeof RATE_KEYS)[number]

const RATE_LABELS: Record<RateKey, string> = {
  'NI|F': 'קבועה לא צמודה',
  'NI|V': 'פריים (משתנה)',
  'CPI|F': 'צמודה קבועה',
  'CPI|V': 'צמודה משתנה',
}

const termOptions = Array.from({ length: 26 }, (_, i) => i + 5)

export function MortgageCalculator() {
  const [loanInput, setLoanInput] = useState('')
  const [term, setTerm] = useState('20')
  const [rateType, setRateType] = useState<RateKey>('NI|F')
  const [rateOverride, setRateOverride] = useState('')
  const [apiRates, setApiRates] = useState<MortgageRatesResponse | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/mortgage-rates')
      .then((res) => res.json())
      .then((data: MortgageRatesResponse) => {
        setApiRates(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const liveRate = useMemo(() => {
    if (!apiRates) return null
    return apiRates.rates.find((r) => r.key === rateType)?.rate ?? null
  }, [apiRates, rateType])


  const effectiveRate = useMemo(() => {
    if (rateOverride) {
      const parsed = parseFloat(rateOverride)
      if (!isNaN(parsed) && parsed > 0) return parsed
    }
    return liveRate
  }, [rateOverride, liveRate])

  const loanAmount = useMemo(() => {
    const num = parseFloat(loanInput.replace(/,/g, ''))
    return isNaN(num) ? 0 : Math.max(0, num)
  }, [loanInput])

  const result = useMemo(() => {
    if (loanAmount === 0 || !effectiveRate) return null

    const monthlyRate = effectiveRate / 100 / 12
    const months = parseInt(term) * 12

    // Standard amortization formula: P × r(1+r)^n / ((1+r)^n - 1)
    const factor = Math.pow(1 + monthlyRate, months)
    const monthlyPayment = loanAmount * (monthlyRate * factor) / (factor - 1)
    const totalRepayment = monthlyPayment * months
    const totalInterest = totalRepayment - loanAmount

    return {
      monthlyPayment,
      totalInterest,
      totalRepayment,
    }
  }, [loanAmount, effectiveRate, term])

  return (
    <Card className="max-w-lg mx-auto">
      <h2 className="text-2xl font-extrabold tracking-tight text-text-primary mb-6">
        מחשבון משכנתא
      </h2>

      {/* Rate type selector */}
      <div className="flex flex-wrap rounded-xl bg-bg-surface p-1 mb-6 gap-1" role="radiogroup" aria-label="סוג מסלול">
        {RATE_KEYS.map((key) => (
          <button
            key={key}
            role="radio"
            aria-checked={rateType === key}
            onClick={() => { setRateType(key); setRateOverride('') }}
            className={cn(
              'flex-1 min-w-[calc(50%-0.25rem)] rounded-lg px-3 py-2.5 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-main',
              rateType === key
                ? 'bg-primary text-white shadow-sm'
                : 'text-text-muted hover:text-text-primary'
            )}
          >
            {RATE_LABELS[key]}
          </button>
        ))}
      </div>

      {loading && (
        <div className="h-10 rounded-lg bg-bg-surface animate-pulse mb-4" />
      )}

      {liveRate && !loading && (
        <p className="text-sm text-text-muted mb-4">
          ריבית ממוצעת נוכחית:{' '}
          <span className="font-bold text-primary">{liveRate.toFixed(2)}%</span>
          <span className="text-text-muted/50 text-xs"> · מקור: בנק ישראל</span>
        </p>
      )}

      <div className="grid grid-cols-2 gap-4 mb-2">
        <Input
          label="סכום הלוואה (₪)"
          name="loan-amount"
          type="text"
          inputMode="decimal"
          placeholder="1,000,000"
          value={loanInput}
          onChange={(e) => setLoanInput(e.target.value)}
        />
        <Select
          label="תקופה (שנים)"
          id="loan-term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        >
          {termOptions.map((y) => (
            <option key={y} value={String(y)}>
              {y}
            </option>
          ))}
        </Select>
      </div>

      <Input
        label="ריבית שנתית (%) - ניתן לשנות ידנית"
        name="rate-override"
        type="text"
        inputMode="decimal"
        placeholder={liveRate ? liveRate.toFixed(2) : '4.5'}
        value={rateOverride}
        onChange={(e) => setRateOverride(e.target.value)}
      />

      {result && (
        <div className="mt-6 space-y-3 rounded-xl bg-bg-surface p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-text-muted">החזר חודשי</span>
            <span className="text-xl font-bold text-primary">
              ₪{formatILS(result.monthlyPayment)}
            </span>
          </div>
          <div className="flex items-center justify-between border-t border-text-muted/10 pt-3">
            <span className="text-sm text-text-muted">סה״כ ריבית</span>
            <span className="text-lg font-semibold text-text-primary">
              ₪{formatILS(result.totalInterest)}
            </span>
          </div>
          <div className="flex items-center justify-between border-t border-text-muted/10 pt-3">
            <span className="text-sm text-text-muted">סה״כ החזר</span>
            <span className="text-lg font-semibold text-text-primary">
              ₪{formatILS(result.totalRepayment)}
            </span>
          </div>
        </div>
      )}

      {apiRates?.lastUpdate && (
        <p className="mt-4 text-xs text-text-muted/60 text-center">
          עדכון אחרון: {formatDateHe(apiRates.lastUpdate)} · מקור: בנק ישראל
        </p>
      )}
    </Card>
  )
}
