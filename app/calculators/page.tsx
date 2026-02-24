import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PageHero } from '@/components/sections/PageHero'
import { CalculatorsStickyNav } from '@/components/sections/CalculatorsStickyNav'
import { ExchangeRatesTable } from '@/components/sections/ExchangeRatesTable'
import { MortgageCalculator } from '@/components/sections/MortgageCalculator'
import { CurrencyConverter } from '@/components/sections/CurrencyConverter'
import { InflationCalculator } from '@/components/sections/InflationCalculator'
import { SavingsCalculator } from '@/components/sections/SavingsCalculator'
import { CalculatorCta } from '@/components/sections/CalculatorCta'
import { AnimateOnScroll } from '@/components/ui/motion'
import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'מחשבונים',
  description:
    'מחשבונים פיננסיים חינמיים עם נתונים בזמן אמת מבנק ישראל – שערי חליפין, משכנתא, המרת מטבעות, אינפלציה וחיסכון.',
  path: '/calculators',
  keywords: [
    'שערי חליפין בנק ישראל',
    'מחשבון משכנתא',
    'המרת מטבעות',
    'מחשבון אינפלציה',
    'מחשבון חיסכון',
    'ריבית בנק ישראל',
  ],
})

export default function CalculatorsPage() {
  return (
    <>
      <PageHero
        title="מחשבונים פיננסיים"
        subtitle="כלים חינמיים עם נתונים בזמן אמת מבנק ישראל"
      />

      <CalculatorsStickyNav />

      {/* Currency Converter */}
      <section id="currency-converter" className="py-12 sm:py-20 scroll-mt-32 sm:scroll-mt-36">
        <Container>
          <SectionHeading
            title="המרת מטבעות"
            subtitle="המירו בין מטבעות לפי שערים יומיים מבנק ישראל"
          />
          <AnimateOnScroll preset="fade-in-up">
            <CurrencyConverter />
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Exchange Rates */}
      <section id="exchange-rates" className="py-12 sm:py-20 scroll-mt-32 sm:scroll-mt-36">
        <Container>
          <SectionHeading
            title="שערי חליפין"
            subtitle="שערי מטבע יומיים מבנק ישראל"
          />
          <AnimateOnScroll preset="fade-in-up">
            <ExchangeRatesTable />
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Mortgage Calculator */}
      <section id="mortgage" className="py-12 sm:py-20 scroll-mt-32 sm:scroll-mt-36">
        <Container>
          <SectionHeading
            title="מחשבון משכנתא"
            subtitle="חשבו החזר חודשי לפי ריביות ממוצעות מבנק ישראל"
          />
          <AnimateOnScroll preset="fade-in-up">
            <MortgageCalculator />
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Savings Calculator */}
      <section id="savings" className="py-12 sm:py-20 scroll-mt-32 sm:scroll-mt-36">
        <Container>
          <SectionHeading
            title="מחשבון חיסכון"
            subtitle="חשבו ריבית דריבית על הפקדות לפי ריבית בנק ישראל"
          />
          <AnimateOnScroll preset="fade-in-up">
            <SavingsCalculator />
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Inflation Calculator */}
      <section id="inflation" className="py-12 sm:py-20 scroll-mt-32 sm:scroll-mt-36">
        <Container>
          <SectionHeading
            title="מחשבון אינפלציה"
            subtitle="בדקו את הערך הריאלי של כסף לאורך זמן לפי מדד המחירים לצרכן"
          />
          <AnimateOnScroll preset="fade-in-up">
            <InflationCalculator />
          </AnimateOnScroll>
        </Container>
      </section>

      <CalculatorCta />
    </>
  )
}
