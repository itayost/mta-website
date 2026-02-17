import { NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/schemas'
import { sendLead } from '@/lib/send-lead'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Honeypot check
    if (body.honeypot) {
      return NextResponse.json({ success: true, message: 'ok' })
    }

    const parsed = contactFormSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: 'נתונים לא תקינים', errors: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const result = await sendLead(parsed.data)
    return NextResponse.json(result, { status: result.success ? 200 : 500 })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { success: false, message: 'אירעה שגיאה בשרת' },
      { status: 500 }
    )
  }
}
