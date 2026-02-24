'use client'

import { useState, useEffect, useMemo } from 'react'
import { ArrowLeftRight } from 'lucide-react'
import { formatDateHe } from '@/lib/formatters'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import type { ExchangeRate } from '@/app/api/exchange-rates/route'

const CURRENCY_LIST = [
  { code: 'ILS', name: 'שקל ישראלי' },
  { code: 'USD', name: 'דולר אמריקאי' },
  { code: 'EUR', name: 'אירו' },
  { code: 'GBP', name: 'לירה שטרלינג' },
  { code: 'JPY', name: 'ין יפני' },
  { code: 'CHF', name: 'פרנק שוויצרי' },
  { code: 'CAD', name: 'דולר קנדי' },
  { code: 'AUD', name: 'דולר אוסטרלי' },
]

export function CurrencyConverter() {
  const [amount, setAmount] = useState('100')
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('ILS')
  const [rates, setRates] = useState<ExchangeRate[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/api/exchange-rates')
      .then((res) => res.json())
      .then((data) => {
        setRates(data.rates ?? [])
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  const result = useMemo(() => {
    const num = parseFloat(amount.replace(/,/g, ''))
    if (isNaN(num) || num <= 0 || rates.length === 0) return null

    // All BOI rates are X→ILS (rate = how many ILS per unit of X)
    const getIlsRate = (code: string): number | null => {
      if (code === 'ILS') return 1
      const rate = rates.find((r) => r.code === code)
      if (!rate) return null
      return rate.rate / rate.unit
    }

    const fromRate = getIlsRate(fromCurrency)
    const toRate = getIlsRate(toCurrency)
    if (!fromRate || !toRate) return null

    // Convert: from → ILS → to
    const ilsAmount = num * fromRate
    const converted = ilsAmount / toRate
    const exchangeRate = fromRate / toRate

    return { converted, exchangeRate }
  }, [amount, fromCurrency, toCurrency, rates])

  const handleSwap = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  const lastUpdate = rates[0]?.lastUpdate

  const formatResult = (value: number): string => {
    return new Intl.NumberFormat('he-IL', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value)
  }

  return (
    <Card className="max-w-lg mx-auto">
      <h2 className="font-display text-2xl font-extrabold tracking-tight text-text-primary mb-6">
        המרת מטבעות
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
          לא ניתן לטעון שערי חליפין כרגע. נסו שוב מאוחר יותר.
        </p>
      )}

      {!loading && !error && (
        <>
          <Input
            label="סכום"
            name="convert-amount"
            type="text"
            inputMode="decimal"
            placeholder="100"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <div className="mt-4 flex items-end gap-3">
            <div className="min-w-0 flex-1">
              <Select
                label="מ-"
                id="from-currency"
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="w-full"
              >
                {CURRENCY_LIST.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.code} - {c.name}
                  </option>
                ))}
              </Select>
            </div>

            <button
              type="button"
              onClick={handleSwap}
              className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-bg-surface text-text-muted hover:text-primary hover:bg-primary/5 transition-all mb-0.5"
              aria-label="החלף מטבעות"
            >
              <ArrowLeftRight className="size-5" />
            </button>

            <div className="min-w-0 flex-1">
              <Select
                label="ל-"
                id="to-currency"
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="w-full"
              >
                {CURRENCY_LIST.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.code} - {c.name}
                  </option>
                ))}
              </Select>
            </div>
          </div>

          {result && (
            <div className="mt-6 space-y-3 rounded-xl bg-bg-surface p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-muted">תוצאה</span>
                <span className="text-xl font-bold text-primary">
                  {formatResult(result.converted)} {toCurrency}
                </span>
              </div>
              <div className="flex items-center justify-between border-t border-text-muted/10 pt-3">
                <span className="text-sm text-text-muted">שער המרה</span>
                <span className="text-base font-semibold text-text-primary">
                  1 {fromCurrency} = {result.exchangeRate.toFixed(4)} {toCurrency}
                </span>
              </div>
            </div>
          )}

          {lastUpdate && (
            <p className="mt-4 text-xs text-text-muted/60 text-center">
              עדכון אחרון: {formatDateHe(lastUpdate)}
              {' · '}
              מקור: בנק ישראל
            </p>
          )}
        </>
      )}
    </Card>
  )
}
