/** Shared ILS number formatters for calculator components */

const ilsRounded = new Intl.NumberFormat('he-IL', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
})

const ilsPrecise = new Intl.NumberFormat('he-IL', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

/** Format a number as ILS with no decimals (e.g. 15,000) */
export function formatILS(value: number): string {
  return ilsRounded.format(value)
}

/** Format a number as ILS with 2 decimals (e.g. 1,234.56) */
export function formatILSPrecise(value: number): string {
  return ilsPrecise.format(value)
}

/** Format a number as a percentage with sign (e.g. +1.23%, -0.45%) */
export function formatPercent(value: number): string {
  const sign = value > 0 ? '+' : ''
  return `${sign}${value.toFixed(2)}%`
}

/**
 * Format a date string to DD/MM/YYYY (Israeli locale).
 * Accepts ISO dates (2026-02-24), year-month (2026-01), or full ISO strings.
 */
export function formatDateHe(value: string): string {
  if (!value) return ''
  // Year-month only (e.g. "2026-01") → "01/2026"
  if (/^\d{4}-\d{2}$/.test(value)) {
    const [y, m] = value.split('-')
    return `${m}/${y}`
  }
  const d = new Date(value)
  if (isNaN(d.getTime())) return value
  return d.toLocaleDateString('he-IL', { day: '2-digit', month: '2-digit', year: 'numeric' })
}
