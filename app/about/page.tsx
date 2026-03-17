import type { Metadata } from 'next'
import { TeamScrollStory } from '@/components/sections/TeamScrollStory'
import { TeamForce } from '@/components/sections/TeamForce'
import { ValuesSection } from '@/components/sections/ValuesSection'
import { AboutCta } from '@/components/sections/AboutCta'
import { RoundedTransition, RoundedTransitionUp } from '@/components/ui/RoundedTransition'
import { generatePageMetadata, buildLocalBusinessJsonLd } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'אודות',
  description:
    'משרד מזון יועצי מס, מוסד מקצועי ומשפחתי הפועל בלב עולם המיסוי הישראלי מאז 1966. הכירו את הצוות המוביל: יוסי מזון, שמואל (סמי) מזון וצוות מקצועי.',
  path: '/about',
  keywords: ['אודות מזון ייעוץ מס', 'יועץ מס מוסמך ותיק חיפה'],
})

export default function AboutPage() {
  const jsonLd = buildLocalBusinessJsonLd()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <TeamScrollStory />

      <RoundedTransitionUp from="bg-bg-surface" to="bg-bg-main" />

      <TeamForce />

      <RoundedTransition from="bg-bg-main" to="bg-bg-surface" />

      <ValuesSection />

      <RoundedTransitionUp from="bg-bg-surface" to="bg-bg-main" />

      <AboutCta />
    </>
  )
}
