'use client'

import { useState, useMemo } from 'react'
import { formatILS } from '@/lib/formatters'
import {
  CREDIT_POINT_VALUE,
  CREDIT_POINTS,
  calcProgressiveTaxDetailed,
} from '@/lib/tax-constants'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { ToggleGroup } from '@/components/ui/ToggleGroup'

export function IncomeTaxCalculator() {
  const [income, setIncome] = useState('')
  const [gender, setGender] = useState<'male' | 'female'>('male')

  const parsed = useMemo(() => {
    const num = parseFloat(income.replace(/,/g, ''))
    return isNaN(num) ? 0 : num
  }, [income])

  const result = useMemo(() => {
    if (parsed === 0) return null
    const { tax: rawTax, brackets } = calcProgressiveTaxDetailed(parsed, formatILS)
    const creditDeduction = CREDIT_POINTS[gender] * CREDIT_POINT_VALUE
    const finalTax = Math.max(0, rawTax - creditDeduction)
    const effectiveRate = parsed > 0 ? (finalTax / parsed) * 100 : 0

    return {
      rawTax,
      creditDeduction,
      finalTax,
      effectiveRate,
      brackets,
      afterTax: parsed - finalTax,
    }
  }, [parsed, gender])

  return (
    <Card className="max-w-lg mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-2xl font-extrabold text-text-primary">מחשבון מס הכנסה</h2>
        <span className="text-xs font-medium text-primary bg-primary/10 rounded-full px-2.5 py-0.5">2025</span>
      </div>

      {/* Gender toggle */}
      <ToggleGroup
        options={[
          { value: 'male', label: 'גבר (2.25 נ״ז)' },
          { value: 'female', label: 'אישה (2.75 נ״ז)' },
        ]}
        value={gender}
        onChange={setGender}
        ariaLabel="מגדר"
      />

      {/* Income input */}
      <Input
        label="הכנסה חודשית ברוטו (₪)"
        name="income-tax-amount"
        type="text"
        inputMode="decimal"
        placeholder="לדוגמה: 15,000"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      />

      {/* Results */}
      {result && (
        <div className="mt-6 space-y-4">
          {/* Main result */}
          <div className="rounded-xl bg-bg-surface p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-muted">מס הכנסה חודשי</span>
              <span className="text-xl font-bold text-primary">₪{formatILS(result.finalTax)}</span>
            </div>
            <div className="flex items-center justify-between border-t border-text-muted/10 pt-3">
              <span className="text-sm text-text-muted">שיעור מס אפקטיבי</span>
              <span className="text-lg font-semibold text-accent">{result.effectiveRate.toFixed(1)}%</span>
            </div>
            <div className="flex items-center justify-between border-t border-text-muted/10 pt-3">
              <span className="text-sm text-text-muted">הכנסה אחרי מס</span>
              <span className="text-lg font-semibold text-text-primary">₪{formatILS(result.afterTax)}</span>
            </div>
          </div>

          {/* Bracket breakdown */}
          <details className="group">
            <summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-text-muted hover:text-primary transition-colors py-2">
              <span>פירוט לפי מדרגות</span>
              <span className="text-xs transition-transform duration-200 group-open:rotate-180">▼</span>
            </summary>
            <div className="mt-2 rounded-xl bg-bg-surface p-4 space-y-2 text-sm">
              {result.brackets.map((b, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-text-muted" dir="ltr">₪{b.range} ({(b.rate * 100).toFixed(0)}%)</span>
                  <span className="text-text-primary font-medium">₪{formatILS(b.amount)}</span>
                </div>
              ))}
              <div className="flex items-center justify-between border-t border-text-muted/10 pt-2">
                <span className="text-text-muted">מס לפני זיכוי</span>
                <span className="text-text-primary font-medium">₪{formatILS(result.rawTax)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-text-muted">זיכוי נקודות ({CREDIT_POINTS[gender]})</span>
                <span className="text-success font-medium">-₪{formatILS(result.creditDeduction)}</span>
              </div>
            </div>
          </details>

          <p className="text-xs text-text-muted/50 text-center">
            * חישוב אינדיקטיבי בלבד. לייעוץ מדויק פנו למשרד.
          </p>
        </div>
      )}
    </Card>
  )
}
