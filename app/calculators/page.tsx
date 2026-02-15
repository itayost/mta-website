import type { Metadata } from 'next'
import { Calculator } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/sections/PageHero'
import { Card } from '@/components/ui/Card'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'מחשבונים',
  description:
    'מחשבוני מס ופיננסים – מחשבון מס הכנסה, מחשבון שכר נטו, מחשבון מע"מ ועוד. כלים חינמיים לחישובים פיננסיים.',
  path: '/calculators',
  keywords: ['מחשבון מס', 'מחשבון שכר', 'מחשבון מע"מ'],
})

const upcomingCalculators = [
  {
    title: 'מחשבון מס הכנסה',
    description: 'חשבו את המס השנתי הצפוי על בסיס הכנסה שנתית ומדרגות המס העדכניות.',
  },
  {
    title: 'מחשבון שכר נטו-ברוטו',
    description: 'המירו בין שכר ברוטו לנטו עם חישוב מדויק של כל הניכויים.',
  },
  {
    title: 'מחשבון מע"מ',
    description: 'חשבו סכומים כולל ולא כולל מע"מ בקלות.',
  },
  {
    title: 'מחשבון פיצויי פיטורין',
    description: 'חשבו את סכום פיצויי הפיטורין המגיעים לכם על פי חוק.',
  },
]

export default function CalculatorsPage() {
  return (
    <>
      <PageHero
        title="מחשבונים"
        subtitle="כלים חינמיים לחישובי מס ופיננסים"
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
            {upcomingCalculators.map((calc) => (
              <Card key={calc.title} glass className="relative overflow-hidden">
                <div className="absolute top-3 end-3">
                  <span className="inline-flex items-center rounded-full bg-accent-100 px-3 py-1 text-xs font-medium text-accent-600">
                    בקרוב
                  </span>
                </div>
                <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 text-primary-600 mb-4">
                  <Calculator className="size-6" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{calc.title}</h3>
                <p className="text-neutral-600 text-sm">{calc.description}</p>
              </Card>
            ))}
          </div>

          <p className="text-center text-neutral-500 mt-12">
            המחשבונים בפיתוח ויהיו זמינים בקרוב. בינתיים, אתם מוזמנים לפנות אלינו
            לייעוץ אישי.
          </p>
        </Container>
      </section>

      <CtaBanner />
    </>
  )
}
