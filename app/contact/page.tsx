import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/sections/PageHero'
import { LeadForm } from '@/components/sections/LeadForm'
import { ContactInfo } from '@/components/sections/ContactInfo'
import { GoogleMap } from '@/components/sections/GoogleMap'
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
        title="צרו קשר"
        subtitle="נשמח לשמוע מכם. השאירו פרטים ונחזור אליכם בהקדם."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <AnimateOnScroll preset="fade-in-up">
              <div>
                <LeadForm />
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
