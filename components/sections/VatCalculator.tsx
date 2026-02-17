'use client'

import { useState, useMemo } from 'react'
import { formatILSPrecise } from '@/lib/formatters'
import { VAT_RATE } from '@/lib/tax-constants'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { ToggleGroup } from '@/components/ui/ToggleGroup'

type Direction = 'add' | 'remove'

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
      <ToggleGroup
        options={[
          { value: 'add', label: 'ללא → כולל מע״מ' },
          { value: 'remove', label: 'כולל → ללא מע״מ' },
        ]}
        value={direction}
        onChange={setDirection}
        ariaLabel="כיוון חישוב"
      />

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
              ₪{formatILSPrecise(result.total)}
            </span>
          </div>
          <div className="flex items-center justify-between border-t border-text-muted/10 pt-3">
            <span className="text-sm text-text-muted">מע״מ (17%)</span>
            <span className="text-lg font-semibold text-accent">
              ₪{formatILSPrecise(result.vat)}
            </span>
          </div>
        </div>
      )}
    </Card>
  )
}
