import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PageHero } from '@/components/sections/PageHero'
import { ContactChannels } from '@/components/sections/ContactChannels'
import { LeadForm } from '@/components/sections/LeadForm'
import { ContactInfo } from '@/components/sections/ContactInfo'
import { GoogleMap } from '@/components/sections/GoogleMap'
import { RoundedTransition, RoundedTransitionUp } from '@/components/ui/RoundedTransition'
import { AnimateOnScroll } from '@/components/ui/motion'
import { generatePageMetadata, buildLocalBusinessJsonLd } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'צור קשר',
  description:
    'צרו קשר עם מזון ייעוץ מס – יועצי מס מוסמכים בחיפה. טלפון, אימייל, כתובת ושעות פעילות. השאירו פרטים ונחזור אליכם.',
  path: '/contact',
  keywords: ['צור קשר יועץ מס', 'פגישת ייעוץ מס'],
})

export default function ContactPage() {
  const jsonLd = buildLocalBusinessJsonLd()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title="איך תרצו ליצור קשר?"
        subtitle="בחרו את הדרך הנוחה לכם - אנחנו כאן בכל ערוץ"
        variant="default"
      />

      <ContactChannels />

      <RoundedTransition />

      {/* Form + Testimonial side by side */}
      <section className="py-14 sm:py-28 bg-bg-surface">
        <Container>
          <SectionHeading
            title="השאירו פרטים"
            subtitle="נחזור אליכם תוך שעתיים בשעות הפעילות"
          />
          <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 max-w-5xl mx-auto">
            <AnimateOnScroll preset="fade-in-up">
              <LeadForm />
            </AnimateOnScroll>
            <AnimateOnScroll preset="fade-in-up" delay={0.15}>
              <ContactInfo />
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      <RoundedTransitionUp />

      {/* Map */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            title="איפה אנחנו?"
            subtitle="שער פלמר 1, קומה 7, חיפה"
          />
          <AnimateOnScroll preset="fade-in-up">
            <div className="max-w-4xl mx-auto">
              <GoogleMap />
            </div>
          </AnimateOnScroll>
        </Container>
      </section>
    </>
  )
}
