import { Hero } from '@/components/sections/Hero'
import { LogoCarousel } from '@/components/sections/LogoCarousel'
import { StatsCounter } from '@/components/sections/StatsCounter'
import { BentoGrid } from '@/components/sections/BentoGrid'
import { AnimatedTestimonials } from '@/components/sections/AnimatedTestimonials'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { RoundedTransition, RoundedTransitionUp } from '@/components/ui/RoundedTransition'
import { PageTransition } from '@/components/ui/motion'
import { buildLocalBusinessJsonLd } from '@/lib/seo'

export default function HomePage() {
  const jsonLd = buildLocalBusinessJsonLd()

  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Transition → surface */}
      <RoundedTransition from="bg-bg-main" to="bg-bg-surface" />

      {/* 3. Logo Carousel + Stats */}
      <LogoCarousel />
      <StatsCounter />

      {/* 4. Transition → main */}
      <RoundedTransitionUp from="bg-bg-surface" to="bg-bg-main" />

      {/* 5. Bento Grid services */}
      <BentoGrid />

      {/* 6. Animated Testimonials */}
      <AnimatedTestimonials />

      {/* 7. CTA */}
      <CtaBanner />
    </PageTransition>
  )
}
