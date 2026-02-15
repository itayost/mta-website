import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlowDivider } from '@/components/ui/GlowDivider'
import { PageHero } from '@/components/sections/PageHero'
import { CalculatorHub } from '@/components/sections/CalculatorHub'
import { VatCalculator } from '@/components/sections/VatCalculator'
import { IncomeTaxCalculator } from '@/components/sections/IncomeTaxCalculator'
import { NetSalaryCalculator } from '@/components/sections/NetSalaryCalculator'
import { TaxBracketTable } from '@/components/sections/TaxBracketTable'
import { CalculatorFaq } from '@/components/sections/CalculatorFaq'
import { CalculatorCta } from '@/components/sections/CalculatorCta'
import { PageTransition, AnimateOnScroll } from '@/components/ui/motion'
import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'מחשבונים',
  description:
    'מחשבוני מס ופיננסים חינמיים ומעודכנים ל-2025 – מחשבון מס הכנסה, מחשבון שכר נטו-ברוטו, מחשבון מע"מ. חשבו בקלות כמה מס תשלמו.',
  path: '/calculators',
  keywords: ['מחשבון מס הכנסה 2025', 'מחשבון שכר נטו', 'מחשבון מע"מ', 'מדרגות מס 2025'],
})

export default function CalculatorsPage() {
  return (
    <PageTransition>
      <PageHero
        title="מחשבונים פיננסיים"
        subtitle="כלים חינמיים ומעודכנים ל-2025 לחישובי מס, שכר ומע״מ"
      />

      <CalculatorHub />

      {/* VAT Calculator */}
      <section id="vat" className="py-16 sm:py-20 scroll-mt-24">
        <Container>
          <SectionHeading
            title="מחשבון מע״מ"
            subtitle="הוסיפו או הסירו מע״מ (17%) מכל סכום"
          />
          <AnimateOnScroll preset="fade-in-up">
            <VatCalculator />
          </AnimateOnScroll>
        </Container>
      </section>

      <GlowDivider />

      {/* Income Tax Calculator */}
      <section id="income-tax" className="py-16 sm:py-20 scroll-mt-24">
        <Container>
          <SectionHeading
            title="מחשבון מס הכנסה"
            subtitle="חשבו מס הכנסה חודשי לפי מדרגות המס 2025"
          />
          <AnimateOnScroll preset="fade-in-up">
            <IncomeTaxCalculator />
          </AnimateOnScroll>
        </Container>
      </section>

      <GlowDivider />

      {/* Net Salary Calculator */}
      <section id="net-salary" className="py-16 sm:py-20 scroll-mt-24">
        <Container>
          <SectionHeading
            title="מחשבון שכר נטו"
            subtitle="גלו כמה תקבלו נטו אחרי מס הכנסה, ביטוח לאומי, מס בריאות ופנסיה"
          />
          <AnimateOnScroll preset="fade-in-up">
            <NetSalaryCalculator />
          </AnimateOnScroll>
        </Container>
      </section>

      <TaxBracketTable />

      <CalculatorFaq />

      <CalculatorCta />
    </PageTransition>
  )
}
