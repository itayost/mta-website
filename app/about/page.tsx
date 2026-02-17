import type { Metadata } from 'next'
import { TeamScrollStory } from '@/components/sections/TeamScrollStory'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { AboutCta } from '@/components/sections/AboutCta'
import { RoundedTransitionUp } from '@/components/ui/RoundedTransition'
import { PageTransition } from '@/components/ui/motion'
import { generatePageMetadata, buildLocalBusinessJsonLd } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'אודות',
  description:
    'הכירו את משרד מזון – משרד רואי חשבון ויועצי מס ותיק בחיפה עם למעלה מ-40 שנות ניסיון. סמי ויוסי מזון וצוות מקצועי.',
  path: '/about',
  keywords: ['אודות משרד מזון', 'רואה חשבון ותיק חיפה'],
})

export default function AboutPage() {
  const jsonLd = buildLocalBusinessJsonLd()

  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <TeamScrollStory />

      {/* bg-bg-surface — continues from last storytelling group */}
      <ProcessSteps />

      {/* Transition → main */}
      <RoundedTransitionUp from="bg-bg-surface" to="bg-bg-main" />

      {/* bg-bg-main */}
      <AboutCta />
    </PageTransition>
  )
}
