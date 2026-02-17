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
