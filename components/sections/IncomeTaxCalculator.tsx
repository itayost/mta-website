'use client'

import { useState, useMemo } from 'react'
import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'

// 2025 Israeli monthly tax brackets
const TAX_BRACKETS = [
  { upTo: 7_010, rate: 0.10 },
  { upTo: 10_060, rate: 0.14 },
  { upTo: 16_150, rate: 0.20 },
  { upTo: 22_440, rate: 0.31 },
  { upTo: 46_690, rate: 0.35 },
  { upTo: 60_130, rate: 0.47 },
  { upTo: Infinity, rate: 0.50 }, // 47% + 3% surcharge
]

// Credit point value per month (2025)
const CREDIT_POINT_VALUE = 242

// Default credit points
const CREDIT_POINTS: Record<'male' | 'female', number> = {
  male: 2.25,
  female: 2.75,
}

const formatter = new Intl.NumberFormat('he-IL', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
})

function calculateTax(monthlyIncome: number): { tax: number; brackets: { range: string; rate: number; amount: number }[] } {
  let remaining = monthlyIncome
  let totalTax = 0
  let prevLimit = 0
  const brackets: { range: string; rate: number; amount: number }[] = []

  for (const bracket of TAX_BRACKETS) {
    if (remaining <= 0) break
    const taxable = Math.min(remaining, bracket.upTo - prevLimit)
    const amount = taxable * bracket.rate
    totalTax += amount
    if (taxable > 0) {
      brackets.push({
        range: bracket.upTo === Infinity
          ? `${formatter.format(prevLimit + 1)}+`
          : `${formatter.format(prevLimit + 1)}–${formatter.format(bracket.upTo)}`,
        rate: bracket.rate,
        amount,
      })
    }
    remaining -= taxable
    prevLimit = bracket.upTo
  }

  return { tax: totalTax, brackets }
}

export function IncomeTaxCalculator() {
  const [income, setIncome] = useState('')
  const [gender, setGender] = useState<'male' | 'female'>('male')

  const parsed = useMemo(() => {
    const num = parseFloat(income.replace(/,/g, ''))
    return isNaN(num) ? 0 : num
  }, [income])

  const result = useMemo(() => {
    if (parsed === 0) return null
    const { tax: rawTax, brackets } = calculateTax(parsed)
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
      <div className="flex rounded-xl bg-bg-surface p-1 mb-6" role="radiogroup" aria-label="מגדר">
        <button
          role="radio"
          aria-checked={gender === 'male'}
          onClick={() => setGender('male')}
          className={cn(
            'flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all',
            gender === 'male'
              ? 'bg-primary text-bg-main shadow-sm'
              : 'text-text-muted hover:text-text-primary'
          )}
        >
          גבר (2.25 נ״ז)
        </button>
        <button
          role="radio"
          aria-checked={gender === 'female'}
          onClick={() => setGender('female')}
          className={cn(
            'flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all',
            gender === 'female'
              ? 'bg-primary text-bg-main shadow-sm'
              : 'text-text-muted hover:text-text-primary'
          )}
        >
          אישה (2.75 נ״ז)
        </button>
      </div>

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
              <span className="text-xl font-bold text-primary">₪{formatter.format(result.finalTax)}</span>
            </div>
            <div className="flex items-center justify-between border-t border-white/10 pt-3">
              <span className="text-sm text-text-muted">שיעור מס אפקטיבי</span>
              <span className="text-lg font-semibold text-accent">{result.effectiveRate.toFixed(1)}%</span>
            </div>
            <div className="flex items-center justify-between border-t border-white/10 pt-3">
              <span className="text-sm text-text-muted">הכנסה אחרי מס</span>
              <span className="text-lg font-semibold text-text-primary">₪{formatter.format(result.afterTax)}</span>
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
                  <span className="text-text-primary font-medium">₪{formatter.format(b.amount)}</span>
                </div>
              ))}
              <div className="flex items-center justify-between border-t border-white/10 pt-2">
                <span className="text-text-muted">מס לפני זיכוי</span>
                <span className="text-text-primary font-medium">₪{formatter.format(result.rawTax)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-text-muted">זיכוי נקודות ({CREDIT_POINTS[gender]})</span>
                <span className="text-success font-medium">-₪{formatter.format(result.creditDeduction)}</span>
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
