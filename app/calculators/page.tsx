import type { Metadata } from 'next'
import { Percent, Banknote, ShieldCheck } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/sections/PageHero'
import { VatCalculator } from '@/components/sections/VatCalculator'
import { Card } from '@/components/ui/Card'
import { PageTransition, AnimateOnScroll, StaggerChildren, StaggerItem } from '@/components/ui/motion'
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
    icon: Percent,
  },
  {
    title: 'מחשבון שכר נטו-ברוטו',
    description: 'המירו בין שכר ברוטו לנטו עם חישוב מדויק של כל הניכויים.',
    icon: Banknote,
  },
  {
    title: 'מחשבון פיצויי פיטורין',
    description: 'חשבו את סכום פיצויי הפיטורין המגיעים לכם על פי חוק.',
    icon: ShieldCheck,
  },
]

export default function CalculatorsPage() {
  return (
    <PageTransition>
      <PageHero
        title="מחשבונים"
        subtitle="כלים חינמיים לחישובי מס ופיננסים"
      />

      {/* Live VAT Calculator */}
      <section className="py-20 sm:py-28">
        <Container>
          <AnimateOnScroll preset="fade-in-up">
            <VatCalculator />
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Upcoming calculators */}
      <section className="py-16 sm:py-20 bg-bg-surface">
        <Container>
          <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">
            מחשבונים נוספים בקרוב
          </h2>
          <StaggerChildren className="grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
            {upcomingCalculators.map((calc) => (
              <StaggerItem key={calc.title}>
                <Card glass className="relative overflow-hidden">
                  <div className="absolute top-3 end-3">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      בקרוב
                    </span>
                  </div>
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                    <calc.icon className="size-6" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">{calc.title}</h3>
                  <p className="text-text-muted text-sm">{calc.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>
    </PageTransition>
  )
}
