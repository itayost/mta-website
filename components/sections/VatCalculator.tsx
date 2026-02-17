'use client'

import { useState, useMemo } from 'react'
import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'

const VAT_RATE = 0.17

type Direction = 'add' | 'remove'

const formatter = new Intl.NumberFormat('he-IL', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

export function VatCalculator() {
  const [direction, setDirection] = useState<Direction>('add')
  const [inputValue, setInputValue] = useState('')

  const parsed = useMemo(() => {
    const num = parseFloat(inputValue.replace(/,/g, ''))
    return isNaN(num) ? 0 : num
  }, [inputValue])

  const result = useMemo(() => {
    if (parsed === 0) return { total: 0, vat: 0 }
    if (direction === 'add') {
      const vat = parsed * VAT_RATE
      return { total: parsed + vat, vat }
    }
    const withoutVat = parsed / (1 + VAT_RATE)
    return { total: withoutVat, vat: parsed - withoutVat }
  }, [parsed, direction])

  return (
    <Card className="max-w-lg mx-auto">
      <h2 className="text-2xl font-extrabold text-text-primary mb-6">מחשבון מע״מ</h2>

      {/* Direction toggle */}
      <div className="flex rounded-xl bg-bg-surface p-1 mb-6" role="radiogroup" aria-label="כיוון חישוב">
        <button
          role="radio"
          aria-checked={direction === 'add'}
          onClick={() => setDirection('add')}
          className={cn(
            'flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all',
            direction === 'add'
              ? 'bg-primary text-bg-main shadow-sm'
              : 'text-text-muted hover:text-text-primary'
          )}
        >
          ללא → כולל מע״מ
        </button>
        <button
          role="radio"
          aria-checked={direction === 'remove'}
          onClick={() => setDirection('remove')}
          className={cn(
            'flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all',
            direction === 'remove'
              ? 'bg-primary text-bg-main shadow-sm'
              : 'text-text-muted hover:text-text-primary'
          )}
        >
          כולל → ללא מע״מ
        </button>
      </div>

      {/* Amount input */}
      <Input
        label={direction === 'add' ? 'סכום ללא מע״מ (₪)' : 'סכום כולל מע״מ (₪)'}
        name="vat-amount"
        type="text"
        inputMode="decimal"
        placeholder="0.00"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {/* Results */}
      {parsed > 0 && (
        <div className="mt-6 space-y-3 rounded-xl bg-bg-surface p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-text-muted">
              {direction === 'add' ? 'סכום כולל מע״מ' : 'סכום ללא מע״מ'}
            </span>
            <span className="text-xl font-bold text-primary">
              ₪{formatter.format(result.total)}
            </span>
          </div>
          <div className="flex items-center justify-between border-t border-text-muted/10 pt-3">
            <span className="text-sm text-text-muted">מע״מ (17%)</span>
            <span className="text-lg font-semibold text-accent">
              ₪{formatter.format(result.vat)}
            </span>
          </div>
        </div>
      )}
    </Card>
  )
}
