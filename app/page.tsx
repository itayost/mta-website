import { Hero } from '@/components/sections/Hero'
import { BenefitsBar } from '@/components/sections/BenefitsBar'
import { BentoGrid } from '@/components/sections/BentoGrid'
import { MiniAbout } from '@/components/sections/MiniAbout'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { RoundedTransition, RoundedTransitionUp } from '@/components/ui/RoundedTransition'
import { buildLocalBusinessJsonLd } from '@/lib/seo'

export default function HomePage() {
  const jsonLd = buildLocalBusinessJsonLd()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />

      {/* Benefits bar */}
      <BenefitsBar />

      {/* Services */}
      <BentoGrid />

      {/* Mini-about */}
      <RoundedTransition from="bg-bg-main" to="bg-bg-surface" />
      <MiniAbout />
      <RoundedTransitionUp from="bg-bg-surface" to="bg-bg-main" />

      {/* CTA */}
      <CtaBanner />
    </>
  )
}
