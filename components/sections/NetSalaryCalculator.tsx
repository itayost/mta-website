'use client'

import { useState, useMemo } from 'react'
import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'

// 2025 Israeli constants
const TAX_BRACKETS = [
  { upTo: 7_010, rate: 0.10 },
  { upTo: 10_060, rate: 0.14 },
  { upTo: 16_150, rate: 0.20 },
  { upTo: 22_440, rate: 0.31 },
  { upTo: 46_690, rate: 0.35 },
  { upTo: 60_130, rate: 0.47 },
  { upTo: Infinity, rate: 0.50 },
]

const CREDIT_POINT_VALUE = 242
const CREDIT_POINTS = { male: 2.25, female: 2.75 }

// National Insurance (employee)
const NII_REDUCED_RATE = 0.004  // 0.4% up to threshold
const NII_FULL_RATE = 0.07     // 7% above threshold
const NII_THRESHOLD = 7_522
const MAX_INSURABLE = 50_695

// Health tax (employee)
const HEALTH_REDUCED_RATE = 0.031  // 3.1% up to threshold
const HEALTH_FULL_RATE = 0.05     // 5% above threshold

// Pension
const DEFAULT_PENSION_RATE = 0.06 // 6% employee

const formatter = new Intl.NumberFormat('he-IL', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
})

function calcProgressiveTax(taxableIncome: number): number {
  let remaining = taxableIncome
  let tax = 0
  let prev = 0
  for (const bracket of TAX_BRACKETS) {
    if (remaining <= 0) break
    const taxable = Math.min(remaining, bracket.upTo - prev)
    tax += taxable * bracket.rate
    remaining -= taxable
    prev = bracket.upTo
  }
  return tax
}

export function NetSalaryCalculator() {
  const [gross, setGross] = useState('')
  const [gender, setGender] = useState<'male' | 'female'>('male')
  const [pensionRate, setPensionRate] = useState('6')
  const [showAdvanced, setShowAdvanced] = useState(false)

  const parsedGross = useMemo(() => {
    const num = parseFloat(gross.replace(/,/g, ''))
    return isNaN(num) ? 0 : num
  }, [gross])

  const parsedPension = useMemo(() => {
    const num = parseFloat(pensionRate)
    return isNaN(num) ? 6 : Math.min(num, 23.5)
  }, [pensionRate])

  const result = useMemo(() => {
    if (parsedGross === 0) return null

    // Pension deduction
    const insurableSalary = Math.min(parsedGross, MAX_INSURABLE)
    const pension = insurableSalary * (parsedPension / 100)

    // Taxable income (pension is partially tax-deductible)
    const taxableIncome = parsedGross - pension

    // Income tax
    const rawTax = calcProgressiveTax(taxableIncome)
    const creditDeduction = CREDIT_POINTS[gender] * CREDIT_POINT_VALUE
    const incomeTax = Math.max(0, rawTax - creditDeduction)

    // National insurance
    const niiBase = Math.min(parsedGross, MAX_INSURABLE)
    const niiReduced = Math.min(niiBase, NII_THRESHOLD) * NII_REDUCED_RATE
    const niiFull = Math.max(0, niiBase - NII_THRESHOLD) * NII_FULL_RATE
    const nii = niiReduced + niiFull

    // Health tax
    const healthReduced = Math.min(niiBase, NII_THRESHOLD) * HEALTH_REDUCED_RATE
    const healthFull = Math.max(0, niiBase - NII_THRESHOLD) * HEALTH_FULL_RATE
    const health = healthReduced + healthFull

    const totalDeductions = incomeTax + nii + health + pension
    const net = parsedGross - totalDeductions

    return {
      gross: parsedGross,
      incomeTax,
      nii,
      health,
      pension,
      totalDeductions,
      net,
      netPercent: (net / parsedGross) * 100,
    }
  }, [parsedGross, gender, parsedPension])

  return (
    <Card className="max-w-lg mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-2xl font-extrabold text-text-primary">מחשבון שכר נטו</h2>
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

      {/* Gross salary input */}
      <Input
        label="שכר ברוטו חודשי (₪)"
        name="net-salary-gross"
        type="text"
        inputMode="decimal"
        placeholder="לדוגמה: 15,000"
        value={gross}
        onChange={(e) => setGross(e.target.value)}
      />

      {/* Advanced options */}
      <button
        type="button"
        onClick={() => setShowAdvanced(!showAdvanced)}
        className="mt-4 text-sm text-primary hover:text-primary-dark transition-colors"
      >
        {showAdvanced ? '▲ הסתר הגדרות מתקדמות' : '▼ הגדרות מתקדמות'}
      </button>

      {showAdvanced && (
        <div className="mt-3">
          <Input
            label="הפרשה לפנסיה עובד (%)"
            name="pension-rate"
            type="text"
            inputMode="decimal"
            placeholder="6"
            value={pensionRate}
            onChange={(e) => setPensionRate(e.target.value)}
          />
        </div>
      )}

      {/* Results */}
      {result && (
        <div className="mt-6 space-y-4">
          {/* Net salary highlight */}
          <div className="rounded-xl bg-primary/10 border border-primary/20 p-5 text-center">
            <p className="text-sm text-text-muted mb-1">שכר נטו</p>
            <p className="text-3xl font-black text-primary">₪{formatter.format(result.net)}</p>
            <p className="text-xs text-text-muted/60 mt-1">{result.netPercent.toFixed(1)}% מהברוטו</p>
          </div>

          {/* Deductions breakdown */}
          <div className="rounded-xl bg-bg-surface p-4 space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-text-muted">שכר ברוטו</span>
              <span className="text-text-primary font-semibold">₪{formatter.format(result.gross)}</span>
            </div>
            <div className="flex items-center justify-between border-t border-text-muted/10 pt-3">
              <span className="text-text-muted">מס הכנסה</span>
              <span className="text-error font-medium">-₪{formatter.format(result.incomeTax)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-muted">ביטוח לאומי</span>
              <span className="text-error font-medium">-₪{formatter.format(result.nii)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-muted">מס בריאות</span>
              <span className="text-error font-medium">-₪{formatter.format(result.health)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-muted">פנסיה עובד ({parsedPension}%)</span>
              <span className="text-error font-medium">-₪{formatter.format(result.pension)}</span>
            </div>
            <div className="flex items-center justify-between border-t border-text-muted/10 pt-3">
              <span className="text-text-primary font-semibold">סה״כ ניכויים</span>
              <span className="text-error font-bold">-₪{formatter.format(result.totalDeductions)}</span>
            </div>
          </div>

          <p className="text-xs text-text-muted/50 text-center">
            * חישוב אינדיקטיבי לשכירים. לא כולל נק׳ זיכוי נוספות, נסיעות או הטבות. לייעוץ מדויק פנו למשרד.
          </p>
        </div>
      )}
    </Card>
  )
}
