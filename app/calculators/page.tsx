import type { Metadata } from 'next'
import { Calculator } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/sections/PageHero'
import { Card } from '@/components/ui/Card'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { PageTransition, StaggerChildren, StaggerItem } from '@/components/ui/motion'
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
    <PageTransition>
      <PageHero
        title="מחשבונים"
        subtitle="כלים חינמיים לחישובי מס ופיננסים"
      />

      <section className="py-20 sm:py-28">
        <Container>
          <StaggerChildren className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
            {upcomingCalculators.map((calc) => (
              <StaggerItem key={calc.title}>
                <Card glass className="relative overflow-hidden">
                  <div className="absolute top-3 end-3">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      בקרוב
                    </span>
                  </div>
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                    <Calculator className="size-6" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">{calc.title}</h3>
                  <p className="text-text-muted text-sm">{calc.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <p className="text-center text-text-muted/60 mt-12">
            המחשבונים בפיתוח ויהיו זמינים בקרוב. בינתיים, אתם מוזמנים לפנות אלינו
            לייעוץ אישי.
          </p>
        </Container>
      </section>

      <CtaBanner />
    </PageTransition>
  )
}
