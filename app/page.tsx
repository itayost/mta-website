import { Hero } from '@/components/sections/Hero'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { StatsCounter } from '@/components/sections/StatsCounter'
import { Testimonials } from '@/components/sections/Testimonials'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { LeadForm } from '@/components/sections/LeadForm'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
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
      <ServicesOverview />
      <StatsCounter />
      <Testimonials />
      <section className="py-20 sm:py-28 bg-neutral-50">
        <Container>
          <div className="mx-auto max-w-xl">
            <SectionHeading
              title="השאירו פרטים"
              subtitle="מלאו את הטופס ונחזור אליכם בהקדם"
            />
            <LeadForm />
          </div>
        </Container>
      </section>
      <CtaBanner />
    </>
  )
}
