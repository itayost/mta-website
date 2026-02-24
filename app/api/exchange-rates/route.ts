import { NextResponse } from 'next/server'

const BOI_API = 'https://www.boi.org.il/PublicApi/GetExchangeRates?asXml=false'

const CURRENCY_NAMES: Record<string, string> = {
  USD: 'דולר אמריקאי',
  EUR: 'אירו',
  GBP: 'לירה שטרלינג',
  JPY: 'ין יפני',
  CHF: 'פרנק שוויצרי',
  CAD: 'דולר קנדי',
  AUD: 'דולר אוסטרלי',
  ZAR: 'רנד דרום אפריקאי',
  SEK: 'כתר שבדי',
  NOK: 'כתר נורבגי',
  DKK: 'כתר דני',
  JOD: 'דינר ירדני',
  EGP: 'לירה מצרית',
  LBP: 'לירה לבנונית',
}

export interface ExchangeRate {
  code: string
  name: string
  rate: number
  change: number
  unit: number
  lastUpdate: string
}

export async function GET() {
  try {
    const res = await fetch(BOI_API, { next: { revalidate: 3600 } })

    if (!res.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch exchange rates' },
        { status: 502 }
      )
    }

    const data = await res.json()

    const rates: ExchangeRate[] = (data.exchangeRates ?? []).map(
      (r: { key: string; currentExchangeRate: number; currentChange: number; unit: number; lastUpdate: string }) => ({
        code: r.key,
        name: CURRENCY_NAMES[r.key] ?? r.key,
        rate: r.currentExchangeRate,
        change: r.currentChange,
        unit: r.unit,
        lastUpdate: r.lastUpdate,
      })
    )

    return NextResponse.json({ rates })
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch exchange rates' },
      { status: 500 }
    )
  }
}
