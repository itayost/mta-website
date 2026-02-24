import { NextResponse } from 'next/server'
import { parseCSV } from '@/lib/parse-csv'

const BOI_SDMX = 'https://edge.boi.org.il/FusionEdgeServer/sdmx/v2/data/dataflow/BOI.STATISTICS/PRI/1.0/CP_PCH'

export interface CpiChange {
  period: string
  change: number
}

export interface CpiResponse {
  changes: CpiChange[]
  lastUpdate: string
}

export async function GET() {
  try {
    const res = await fetch(
      `${BOI_SDMX}?format=csv&startPeriod=2000-01-01`,
      { next: { revalidate: 86400 } }
    )

    if (!res.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch CPI data' },
        { status: 502 }
      )
    }

    const csv = await res.text()
    const rows = parseCSV(csv)

    const changes: CpiChange[] = rows
      .filter((r) => r.TIME_PERIOD && r.OBS_VALUE)
      .map((r) => ({
        period: r.TIME_PERIOD,
        change: parseFloat(r.OBS_VALUE),
      }))
      .filter((c) => !isNaN(c.change))
      .sort((a, b) => a.period.localeCompare(b.period))

    const lastUpdate = changes.length > 0 ? changes[changes.length - 1].period : ''

    return NextResponse.json({ changes, lastUpdate } satisfies CpiResponse)
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch CPI data' },
      { status: 500 }
    )
  }
}
