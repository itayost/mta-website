import { NextResponse } from 'next/server'
import { parseCSV } from '@/lib/parse-csv'

const BOI_SDMX = 'https://edge.boi.org.il/FusionEdgeServer/sdmx/v2/data/dataflow/BOI.STATISTICS/BIR_MRTG_99/1.0'

export interface MortgageRate {
  key: string
  label: string
  rate: number
}

export interface MortgageRatesResponse {
  rates: MortgageRate[]
  lastUpdate: string
}

/** Map of INDEXATION_TYPE+IR_FV_TYPE → Hebrew label and sort order */
const RATE_TYPES: Record<string, { label: string; order: number }> = {
  'NI|F': { label: 'קבועה לא צמודה', order: 1 },
  'NI|V': { label: 'פריים (משתנה)', order: 2 },
  'CPI|F': { label: 'צמודה קבועה', order: 3 },
  'CPI|V': { label: 'צמודה משתנה', order: 4 },
}

export async function GET() {
  try {
    const lastMonth = new Date()
    lastMonth.setMonth(lastMonth.getMonth() - 2)
    const startPeriod = `${lastMonth.getFullYear()}-${String(lastMonth.getMonth() + 1).padStart(2, '0')}-01`

    const res = await fetch(
      `${BOI_SDMX}?format=csv&startPeriod=${startPeriod}`,
      { next: { revalidate: 86400 } }
    )

    if (!res.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch mortgage rates' },
        { status: 502 }
      )
    }

    const csv = await res.text()
    const rows = parseCSV(csv)

    // Filter for interest rate rows (percentage points) only
    const rateRows = rows.filter((r) => r.UNIT_MEASURE === 'PT')

    // Group by type key and pick the latest value per type
    const latestByType = new Map<string, { rate: number; period: string }>()

    for (const row of rateRows) {
      const key = `${row.INDEXATION_TYPE}|${row.IR_FV_TYPE}`
      if (!RATE_TYPES[key]) continue

      const rate = parseFloat(row.OBS_VALUE)
      if (isNaN(rate) || rate <= 0) continue

      const period = row.TIME_PERIOD
      const existing = latestByType.get(key)

      // Keep the highest period (most recent) and pick the first valid rate per type
      if (!existing || period > existing.period) {
        latestByType.set(key, { rate, period })
      }
    }

    const rates: MortgageRate[] = []
    let lastUpdate = ''

    for (const [key, config] of Object.entries(RATE_TYPES)) {
      const entry = latestByType.get(key)
      if (entry) {
        rates.push({
          key,
          label: config.label,
          rate: entry.rate,
        })
        if (entry.period > lastUpdate) lastUpdate = entry.period
      }
    }

    rates.sort((a, b) => {
      const orderA = RATE_TYPES[a.key]?.order ?? 99
      const orderB = RATE_TYPES[b.key]?.order ?? 99
      return orderA - orderB
    })

    return NextResponse.json({ rates, lastUpdate } satisfies MortgageRatesResponse)
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch mortgage rates' },
      { status: 500 }
    )
  }
}
