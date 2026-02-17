import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PageHero } from '@/components/sections/PageHero'
import { ContactChannels } from '@/components/sections/ContactChannels'
import { LeadForm } from '@/components/sections/LeadForm'
import { ContactTestimonial } from '@/components/sections/ContactTestimonial'
import { ContactResponseTimeline } from '@/components/sections/ContactResponseTimeline'
import { ContactInfo } from '@/components/sections/ContactInfo'
import { GoogleMap } from '@/components/sections/GoogleMap'
import { ContactFaq } from '@/components/sections/ContactFaq'
import { RoundedTransition, RoundedTransitionUp } from '@/components/ui/RoundedTransition'
import { PageTransition, AnimateOnScroll } from '@/components/ui/motion'
import { generatePageMetadata, buildLocalBusinessJsonLd } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'צור קשר',
  description:
    'צרו קשר עם משרד מזון – רואי חשבון ויועצי מס בחיפה. טלפון, אימייל, כתובת ושעות פעילות. השאירו פרטים ונחזור אליכם.',
  path: '/contact',
  keywords: ['צור קשר רואה חשבון', 'פגישת ייעוץ מס'],
})

export default function ContactPage() {
  const jsonLd = buildLocalBusinessJsonLd()

  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title="דברו איתנו"
        subtitle="הפגישה הראשונה חינם — בואו נכיר ונבין מה אתם צריכים"
        variant="default"
      />

      <ContactChannels />

      {/* Form + Testimonial side by side */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            title="השאירו פרטים"
            subtitle="נחזור אליכם תוך שעתיים בשעות הפעילות"
          />
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 max-w-5xl mx-auto">
            <AnimateOnScroll preset="fade-in-up">
              <div className="relative">
                {/* Form spotlight glow */}
                <div
                  className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 size-96 bg-primary/10 blur-3xl rounded-full pointer-events-none"
                  aria-hidden="true"
                />
                <div className="relative">
                  <LeadForm />
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll preset="fade-in-up" delay={0.15}>
              <div className="space-y-6">
                <ContactTestimonial />
                <ContactInfo />
              </div>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      <RoundedTransition from="bg-bg-main" to="bg-bg-surface" />

      <ContactResponseTimeline />

      <ContactFaq />

      <RoundedTransitionUp from="bg-bg-surface" to="bg-bg-main" />

      {/* Map */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            title="איפה אנחנו?"
            subtitle="שדרות המגינים 18, חיפה — בלב העיר"
          />
          <AnimateOnScroll preset="fade-in-up">
            <div className="max-w-4xl mx-auto">
              <GoogleMap />
            </div>
          </AnimateOnScroll>
        </Container>
      </section>
    </PageTransition>
  )
}
