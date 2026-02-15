import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { AudienceCards } from '@/components/sections/AudienceCards'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { StatsCounter } from '@/components/sections/StatsCounter'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { Testimonials } from '@/components/sections/Testimonials'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { BlogPreview } from '@/components/sections/BlogPreview'
import { CalculatorTeaser } from '@/components/sections/CalculatorTeaser'
import { FaqPreview } from '@/components/sections/FaqPreview'
import { LeadForm } from '@/components/sections/LeadForm'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlowDivider } from '@/components/ui/GlowDivider'
import { PageTransition, AnimateOnScroll } from '@/components/ui/motion'
import { buildLocalBusinessJsonLd } from '@/lib/seo'

export default function HomePage() {
  const jsonLd = buildLocalBusinessJsonLd()

  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero — enhanced with rotating text + social proof */}
      <Hero />

      {/* 2. Trust Bar — certification badges */}
      <TrustBar />

      {/* 3. Who We Serve — audience segmentation cards */}
      <AudienceCards />

      <GlowDivider />

      {/* 4. Services — 3 featured + remaining pills */}
      <ServicesOverview />

      {/* 5. Stats Counter */}
      <StatsCounter />

      {/* 6. Why Choose Us — 3 differentiator pillars */}
      <WhyChooseUs />

      {/* 7. Testimonials — pull quote + carousel */}
      <Testimonials />

      <GlowDivider />

      {/* 8. Process Steps — how we work */}
      <ProcessSteps />

      {/* 9. Blog Preview — latest articles */}
      <BlogPreview />

      {/* 10. Calculator Teaser */}
      <CalculatorTeaser />

      {/* 11. FAQ Preview — top 3 questions */}
      <FaqPreview />

      {/* 12. Lead Form — enhanced with benefits sidebar */}
      <section className="py-20 sm:py-28 bg-bg-surface">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 max-w-5xl mx-auto">
            <AnimateOnScroll preset="fade-in-up">
              <div className="relative">
                {/* Form spotlight glow */}
                <div
                  className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 size-80 bg-primary/8 blur-3xl rounded-full pointer-events-none"
                  aria-hidden="true"
                />
                <div className="relative">
                  <SectionHeading
                    title="השאירו פרטים"
                    subtitle="מלאו את הטופס ונחזור אליכם בהקדם"
                    centered={false}
                  />
                  <LeadForm />
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll preset="fade-in-up" delay={0.15}>
              <div className="flex flex-col justify-center lg:ps-8">
                <h3 className="text-xl font-extrabold text-text-primary mb-6">
                  למה להשאיר פרטים?
                </h3>
                <ul className="space-y-4">
                  {[
                    'פגישת ייעוץ ראשונית חינם',
                    'נחזור אליכם תוך שעתיים',
                    'ללא התחייבות',
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-6 items-center justify-center rounded-full bg-success/10 text-success shrink-0">
                        <svg className="size-3.5" viewBox="0 0 14 14" fill="none">
                          <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-text-muted">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 rounded-xl bg-white/5 border border-white/10 p-4">
                  <p className="text-sm text-text-muted/80 leading-relaxed">
                    <span className="font-semibold text-text-primary">מעדיפים טלפון?</span>
                    {' '}התקשרו אלינו ישירות:{' '}
                    <a
                      href="tel:04-8660044"
                      className="text-primary font-semibold hover:text-primary-dark transition-colors"
                      dir="ltr"
                    >
                      04-8660044
                    </a>
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      {/* 13. CTA Banner */}
      <CtaBanner />
    </PageTransition>
  )
}
