import type { Metadata } from 'next'
import { Phone } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/sections/PageHero'
import { LeadForm } from '@/components/sections/LeadForm'
import { ContactInfo } from '@/components/sections/ContactInfo'
import { GoogleMap } from '@/components/sections/GoogleMap'
import { PageTransition, AnimateOnScroll } from '@/components/ui/motion'
import { contactInfo } from '@/data/contact'
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
        title="צרו קשר"
        subtitle="נשמח לשמוע מכם. השאירו פרטים ונחזור אליכם בהקדם."
        variant="minimal"
      />

      {/* Prominent phone CTA */}
      <section className="py-10 sm:py-14 bg-bg-surface">
        <Container>
          <AnimateOnScroll preset="fade-in-up">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="size-6 text-primary" />
                </div>
                <div className="text-start">
                  <p className="text-sm text-text-muted">מעדיפים לדבר?</p>
                  <p className="text-2xl font-bold text-text-primary" dir="ltr">{contactInfo.phone}</p>
                </div>
              </div>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center rounded-xl bg-primary px-6 py-3 text-base font-semibold text-bg-main shadow-md shadow-primary/20 hover:bg-primary-dark hover:text-white hover:shadow-lg transition-all active:scale-[0.98] btn-shimmer"
              >
                התקשרו עכשיו
              </a>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <AnimateOnScroll preset="fade-in-up">
              <div className="relative">
                {/* Form spotlight glow */}
                <div
                  className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 size-96 bg-primary/10 blur-3xl rounded-full pointer-events-none"
                  aria-hidden="true"
                />
                <div className="relative">
                  <LeadForm />
                  <p className="text-sm text-text-muted/60 mt-4 text-center">
                    נחזור אליכם תוך שעתיים בשעות הפעילות
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll preset="fade-in-up" delay={0.15}>
              <div className="space-y-8">
                <ContactInfo />
                <GoogleMap />
              </div>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>
    </PageTransition>
  )
}
