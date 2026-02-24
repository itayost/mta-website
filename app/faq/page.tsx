import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { FaqSearch } from '@/components/sections/FaqSearch'
import { FaqCta } from '@/components/sections/FaqCta'
import { RoundedTransition, RoundedTransitionUp } from '@/components/ui/RoundedTransition'
import { faqItems } from '@/data/faq'
import { generatePageMetadata, buildFaqJsonLd } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'שאלות נפוצות',
  description:
    'תשובות לשאלות נפוצות בנושאי מס, חשבונאות ושירותי מזון ייעוץ מס. ייעוץ מס, החזרי מס, הנהלת חשבונות ועוד.',
  path: '/faq',
  keywords: ['שאלות נפוצות חשבונאי', 'מידע מיסוי'],
})

export default function FaqPage() {
  const jsonLd = buildFaqJsonLd(faqItems)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title="שאלות נפוצות"
        subtitle="כל מה שרציתם לדעת על שירותי המשרד, מחירים ואיך מתחילים"
      />

      <RoundedTransition from="bg-bg-main" to="bg-bg-surface" />

      <FaqSearch />

      <RoundedTransitionUp from="bg-bg-surface" to="bg-bg-main" />

      <FaqCta />
    </>
  )
}
