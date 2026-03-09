'use client'

import { useState, useEffect } from 'react'
import { formatPercent, formatDateHe } from '@/lib/formatters'
import { Card } from '@/components/ui/Card'
import { cn } from '@/lib/utils'
import type { ExchangeRate } from '@/app/api/exchange-rates/route'

export function ExchangeRatesTable() {
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

  return (
    <Card className="max-w-2xl mx-auto overflow-hidden">
      <h2 className="text-2xl font-extrabold tracking-tight text-text-primary mb-6">
        שערי חליפין
      </h2>

      {loading && (
        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-12 rounded-lg bg-bg-surface animate-pulse" />
          ))}
        </div>
      )}

      {error && (
        <p className="text-sm text-text-muted text-center py-8">
          לא ניתן לטעון שערי חליפין כרגע. נסו שוב מאוחר יותר.
        </p>
      )}

      {!loading && !error && rates.length > 0 && (
        <>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-text-muted/10">
                  <th className="text-start pe-4 py-3 font-medium text-text-muted">מטבע</th>
                  <th className="text-start px-4 py-3 font-medium text-text-muted">יחידה</th>
                  <th className="text-start px-4 py-3 font-medium text-text-muted">שער (₪)</th>
                  <th className="text-start px-4 py-3 font-medium text-text-muted">שינוי</th>
                </tr>
              </thead>
              <tbody>
                {rates.map((rate) => (
                  <tr
                    key={rate.code}
                    className="border-b border-text-muted/5 last:border-0"
                  >
                    <td className="pe-4 py-3">
                      <div className="flex flex-col">
                        <span className="font-bold text-text-primary">{rate.code}</span>
                        <span className="text-xs text-text-muted">{rate.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-text-muted">{rate.unit}</td>
                    <td className="px-4 py-3 font-semibold text-text-primary">
                      {rate.rate.toFixed(4)}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={cn(
                          'text-sm font-medium',
                          rate.change > 0 && 'text-success',
                          rate.change < 0 && 'text-error',
                          rate.change === 0 && 'text-text-muted'
                        )}
                      >
                        {formatPercent(rate.change)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {rates[0]?.lastUpdate && (
            <p className="mt-4 text-xs text-text-muted/60 text-center">
              עדכון אחרון: {formatDateHe(rates[0].lastUpdate)}
              {' · '}
              מקור: בנק ישראל
            </p>
          )}
        </>
      )}
    </Card>
  )
}
