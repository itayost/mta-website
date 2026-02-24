'use client'

import { useState, useEffect, useMemo } from 'react'
import { formatILS, formatDateHe } from '@/lib/formatters'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import type { CpiResponse } from '@/app/api/cpi/route'

const currentYear = new Date().getFullYear()
const currentMonth = new Date().getMonth() + 1

const years = Array.from({ length: currentYear - 2000 + 1 }, (_, i) => 2000 + i)
const months = [
  { value: '01', label: 'ינואר' },
  { value: '02', label: 'פברואר' },
  { value: '03', label: 'מרץ' },
  { value: '04', label: 'אפריל' },
  { value: '05', label: 'מאי' },
  { value: '06', label: 'יוני' },
  { value: '07', label: 'יולי' },
  { value: '08', label: 'אוגוסט' },
  { value: '09', label: 'ספטמבר' },
  { value: '10', label: 'אוקטובר' },
  { value: '11', label: 'נובמבר' },
  { value: '12', label: 'דצמבר' },
]

export function InflationCalculator() {
  const [amountInput, setAmountInput] = useState('1000')
  const [fromYear, setFromYear] = useState('2020')
  const [fromMonth, setFromMonth] = useState('01')
  const [toYear, setToYear] = useState(String(currentYear))
  const [toMonth, setToMonth] = useState(String(currentMonth).padStart(2, '0'))
  const [cpiData, setCpiData] = useState<CpiResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/api/cpi')
      .then((res) => res.json())
      .then((data: CpiResponse) => {
        setCpiData(data)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  const result = useMemo(() => {
    const num = parseFloat(amountInput.replace(/,/g, ''))
    if (isNaN(num) || num <= 0 || !cpiData) return null

    const fromPeriod = `${fromYear}-${fromMonth}`
    const toPeriod = `${toYear}-${toMonth}`

    if (fromPeriod >= toPeriod) return null

    // Get all monthly changes between the two periods
    const relevantChanges = cpiData.changes.filter(
      (c) => c.period > fromPeriod && c.period <= toPeriod
    )

    if (relevantChanges.length === 0) return null

    // Compound the monthly changes: value × Π(1 + change_i/100)
    let factor = 1
    for (const c of relevantChanges) {
      factor *= 1 + c.change / 100
    }

    const adjustedValue = num * factor
    const totalInflation = (factor - 1) * 100

    // Calculate number of years between dates
    const yearsDiff =
      parseInt(toYear) - parseInt(fromYear) + (parseInt(toMonth) - parseInt(fromMonth)) / 12
    const annualRate = yearsDiff > 0 ? (Math.pow(factor, 1 / yearsDiff) - 1) * 100 : 0

    return {
      adjustedValue,
      totalInflation,
      annualRate,
      monthsCount: relevantChanges.length,
    }
  }, [amountInput, fromYear, fromMonth, toYear, toMonth, cpiData])

  return (
    <Card className="max-w-lg mx-auto">
      <h2 className="font-display text-2xl font-extrabold tracking-tight text-text-primary mb-6">
        מחשבון אינפלציה
      </h2>

      {loading && (
        <div className="space-y-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-12 rounded-lg bg-bg-surface animate-pulse" />
          ))}
        </div>
      )}

      {error && (
        <p className="text-sm text-text-muted text-center py-8">
          לא ניתן לטעון נתוני מדד כרגע. נסו שוב מאוחר יותר.
        </p>
      )}

      {!loading && !error && (
        <>
          <Input
            label="סכום (₪)"
            name="inflation-amount"
            type="text"
            inputMode="decimal"
            placeholder="1,000"
            value={amountInput}
            onChange={(e) => setAmountInput(e.target.value)}
          />

          <div className="mt-4">
            <p className="text-sm font-medium text-text-muted mb-2">מתאריך</p>
            <div className="grid grid-cols-2 gap-3">
              <Select
                label="חודש התחלה"
                id="from-month"
                value={fromMonth}
                onChange={(e) => setFromMonth(e.target.value)}
              >
                {months.map((m) => (
                  <option key={m.value} value={m.value}>{m.label}</option>
                ))}
              </Select>
              <Select
                label="שנת התחלה"
                id="from-year"
                value={fromYear}
                onChange={(e) => setFromYear(e.target.value)}
              >
                {years.map((y) => (
                  <option key={y} value={String(y)}>{y}</option>
                ))}
              </Select>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm font-medium text-text-muted mb-2">עד תאריך</p>
            <div className="grid grid-cols-2 gap-3">
              <Select
                label="חודש סיום"
                id="to-month"
                value={toMonth}
                onChange={(e) => setToMonth(e.target.value)}
              >
                {months.map((m) => (
                  <option key={m.value} value={m.value}>{m.label}</option>
                ))}
              </Select>
              <Select
                label="שנת סיום"
                id="to-year"
                value={toYear}
                onChange={(e) => setToYear(e.target.value)}
              >
                {years.map((y) => (
                  <option key={y} value={String(y)}>{y}</option>
                ))}
              </Select>
            </div>
          </div>

          {result && (
            <div className="mt-6 space-y-3 rounded-xl bg-bg-surface p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-muted">ערך מעודכן</span>
                <span className="text-xl font-bold text-primary">
                  ₪{formatILS(result.adjustedValue)}
                </span>
              </div>
              <div className="flex items-center justify-between border-t border-text-muted/10 pt-3">
                <span className="text-sm text-text-muted">אינפלציה מצטברת</span>
                <span className="text-lg font-semibold text-text-primary">
                  {result.totalInflation.toFixed(1)}%
                </span>
              </div>
              <div className="flex items-center justify-between border-t border-text-muted/10 pt-3">
                <span className="text-sm text-text-muted">אינפלציה שנתית ממוצעת</span>
                <span className="text-base font-semibold text-text-primary">
                  {result.annualRate.toFixed(2)}%
                </span>
              </div>
            </div>
          )}

          {cpiData?.lastUpdate && (
            <p className="mt-4 text-xs text-text-muted/60 text-center">
              עדכון אחרון: {formatDateHe(cpiData.lastUpdate)} · מקור: בנק ישראל (מדד המחירים לצרכן)
            </p>
          )}
        </>
      )}
    </Card>
  )
}
