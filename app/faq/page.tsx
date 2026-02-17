import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { TrustBar } from '@/components/sections/TrustBar'
import { FaqPopular } from '@/components/sections/FaqPopular'
import { FaqSearch } from '@/components/sections/FaqSearch'
import { FaqCta } from '@/components/sections/FaqCta'
import { PageTransition } from '@/components/ui/motion'
import { faqItems } from '@/data/faq'
import { generatePageMetadata, buildFaqJsonLd } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'שאלות נפוצות',
  description:
    'תשובות לשאלות נפוצות בנושאי מס, חשבונאות ושירותי משרד מזון. ייעוץ מס, החזרי מס, הנהלת חשבונות ועוד.',
  path: '/faq',
  keywords: ['שאלות נפוצות רואה חשבון', 'מידע מיסוי'],
})

export default function FaqPage() {
  const jsonLd = buildFaqJsonLd(faqItems)

  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title="שאלות נפוצות"
        subtitle="כל מה שרציתם לדעת על שירותי המשרד, מחירים ואיך מתחילים"
      />

      <TrustBar />

      <FaqPopular />

      <FaqSearch />

      <FaqCta />
    </PageTransition>
  )
}
