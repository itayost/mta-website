import { NextResponse } from 'next/server'

const BOI_SDMX = 'https://edge.boi.org.il/FusionEdgeServer/sdmx/v2/data/dataflow/BOI.STATISTICS/BR/1.0'

export interface BoiRateEntry {
  date: string
  rate: number
}

export interface BoiRateResponse {
  rate: number
  history: BoiRateEntry[]
  lastUpdate: string
}

function parseCSV(text: string): Record<string, string>[] {
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

export async function GET() {
  try {
    const yearAgo = new Date()
    yearAgo.setFullYear(yearAgo.getFullYear() - 1)
    const startPeriod = `${yearAgo.getFullYear()}-${String(yearAgo.getMonth() + 1).padStart(2, '0')}-01`

    const res = await fetch(
      `${BOI_SDMX}?format=csv&startPeriod=${startPeriod}`,
      { next: { revalidate: 86400 } }
    )

    if (!res.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch BOI rate' },
        { status: 502 }
      )
    }

    const csv = await res.text()
    const rows = parseCSV(csv)

    // Filter for the main BOI interest rate series
    const rateRows = rows
      .filter((r) => r.SERIES_CODE === 'MNT_WIN_LN_D' && r.OBS_VALUE)
      .map((r) => ({
        date: r.TIME_PERIOD,
        rate: parseFloat(r.OBS_VALUE),
      }))
      .filter((r) => !isNaN(r.rate))
      .sort((a, b) => a.date.localeCompare(b.date))

    // Deduplicate: keep only entries where rate changed
    const history: BoiRateEntry[] = []
    for (const entry of rateRows) {
      if (history.length === 0 || history[history.length - 1].rate !== entry.rate) {
        history.push(entry)
      }
    }

    const currentRate = rateRows.length > 0 ? rateRows[rateRows.length - 1].rate : 0
    const lastUpdate = rateRows.length > 0 ? rateRows[rateRows.length - 1].date : ''

    return NextResponse.json({
      rate: currentRate,
      history,
      lastUpdate,
    } satisfies BoiRateResponse)
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch BOI rate' },
      { status: 500 }
    )
  }
}
