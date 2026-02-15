import type { ContactFormData, ContactFormResponse } from '@/types/forms'

export async function sendLead(data: ContactFormData): Promise<ContactFormResponse> {
  const webhookUrl = process.env.WEBHOOK_URL

  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          source: 'mta-website',
          timestamp: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        throw new Error(`Webhook responded with ${response.status}`)
      }

      return { success: true, message: 'הפנייה נשלחה בהצלחה' }
    } catch (error) {
      console.error('Webhook error:', error)
      return { success: false, message: 'אירעה שגיאה בשליחת הפנייה' }
    }
  }

  // Dev fallback - log to console
  console.log('📩 New lead received:', data)
  return { success: true, message: 'הפנייה נשלחה בהצלחה' }
}
