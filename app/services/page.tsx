import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { ServicesFilteredList } from '@/components/sections/ServicesFilteredList'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { ServicesNotSureCta } from '@/components/sections/ServicesNotSureCta'
import { RoundedTransitionUp } from '@/components/ui/RoundedTransition'
import { PageTransition } from '@/components/ui/motion'
import { serviceCategories } from '@/data/services'
import { generatePageMetadata, buildLocalBusinessJsonLd } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'שירותים',
  description:
    'מגוון שירותי חשבונאות, ייעוץ מס וביקורת חשבונות – הנהלת חשבונות, דוחות שנתיים, שכר, מיסוי מקרקעין, מיסוי בינלאומי ועוד.',
  path: '/services',
  keywords: ['שירותי חשבונאות', 'הנהלת חשבונות', 'ביקורת חשבונות', 'דוחות שנתיים'],
})

export default function ServicesPage() {
  const jsonLd = buildLocalBusinessJsonLd()

  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title="השירותים שלנו"
        subtitle="17 שירותים מקצועיים לעצמאים, שכירים וחברות"
      />

      <ServicesFilteredList categories={serviceCategories} />

      {/* Last category (bg-surface) flows directly into ProcessSteps (bg-surface) */}
      <ProcessSteps />

      {/* Transition from ProcessSteps (bg-surface) → main */}
      <RoundedTransitionUp from="bg-bg-surface" to="bg-bg-main" />

      <ServicesNotSureCta />
    </PageTransition>
  )
}
