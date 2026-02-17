/** 2025 Israeli tax constants shared across calculator components */

export const TAX_BRACKETS = [
  { upTo: 7_010, rate: 0.10 },
  { upTo: 10_060, rate: 0.14 },
  { upTo: 16_150, rate: 0.20 },
  { upTo: 22_440, rate: 0.31 },
  { upTo: 46_690, rate: 0.35 },
  { upTo: 60_130, rate: 0.47 },
  { upTo: Infinity, rate: 0.50 },
] as const

export const CREDIT_POINT_VALUE = 242

export const CREDIT_POINTS: Record<'male' | 'female', number> = {
  male: 2.25,
  female: 2.75,
}

// National Insurance (employee)
export const NII_REDUCED_RATE = 0.004
export const NII_FULL_RATE = 0.07
export const NII_THRESHOLD = 7_522
export const MAX_INSURABLE = 50_695

// Health tax (employee)
export const HEALTH_REDUCED_RATE = 0.031
export const HEALTH_FULL_RATE = 0.05

// Pension
export const DEFAULT_PENSION_RATE = 0.06

// VAT
export const VAT_RATE = 0.17

export interface TaxBracketResult {
  range: string
  rate: number
  amount: number
}

/** Calculate progressive income tax from monthly taxable income */
export function calcProgressiveTax(taxableIncome: number): number {
  return calcProgressiveTaxDetailed(taxableIncome).tax
}

/** Calculate progressive tax with per-bracket breakdown (for UI display) */
export function calcProgressiveTaxDetailed(
  taxableIncome: number,
  formatAmount: (n: number) => string = (n) => n.toLocaleString('he-IL'),
): { tax: number; brackets: TaxBracketResult[] } {
  let remaining = taxableIncome
  let tax = 0
  let prev = 0
  const brackets: TaxBracketResult[] = []

  for (const bracket of TAX_BRACKETS) {
    if (remaining <= 0) break
    const taxable = Math.min(remaining, bracket.upTo - prev)
    const amount = taxable * bracket.rate
    tax += amount
    if (taxable > 0) {
      brackets.push({
        range:
          bracket.upTo === Infinity
            ? `${formatAmount(prev + 1)}+`
            : `${formatAmount(prev + 1)}–${formatAmount(bracket.upTo)}`,
        rate: bracket.rate,
        amount,
      })
    }
    remaining -= taxable
    prev = bracket.upTo
  }

  return { tax, brackets }
}
