/**
 * Parse a simple CSV string into an array of key-value row objects.
 * Used by BOI (Bank of Israel) API routes that return SDMX CSV format.
 */
export function parseCSV(text: string): Record<string, string>[] {
  const lines = text.trim().split('\n')
  if (lines.length < 2) return []
  const headers = lines[0].split(',')
  return lines.slice(1).map((line) => {
    const values = line.split(',')
    const row: Record<string, string> = {}
    headers.forEach((h, i) => {
      row[h.trim()] = values[i]?.trim() ?? ''
    })
    return row
  })
}
