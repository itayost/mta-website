import { Hero } from '@/components/sections/Hero'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { StatsCounter } from '@/components/sections/StatsCounter'
import { Testimonials } from '@/components/sections/Testimonials'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { LeadForm } from '@/components/sections/LeadForm'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PageTransition, AnimateOnScroll } from '@/components/ui/motion'
import { WaveDivider } from '@/components/ui/WaveDivider'
import { buildLocalBusinessJsonLd } from '@/lib/seo'

export default function HomePage() {
  const jsonLd = buildLocalBusinessJsonLd()

  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <WaveDivider />
      <ServicesOverview />
      <StatsCounter />
      <Testimonials />
      <WaveDivider color="fill-bg-surface" flipped />
      <section className="py-20 sm:py-28 bg-bg-surface">
        <Container>
          <div className="mx-auto max-w-xl">
            <AnimateOnScroll preset="fade-in-up">
              <SectionHeading
                title="השאירו פרטים"
                subtitle="מלאו את הטופס ונחזור אליכם בהקדם"
              />
              <LeadForm />
            </AnimateOnScroll>
          </div>
        </Container>
      </section>
      <CtaBanner />
    </PageTransition>
  )
}
