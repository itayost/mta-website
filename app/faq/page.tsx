import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/sections/PageHero'
import { AccordionItem } from '@/components/ui/Accordion'
import { Card } from '@/components/ui/Card'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { PageTransition, AnimateOnScroll } from '@/components/ui/motion'
import { faqItems } from '@/data/faq'
import { generatePageMetadata, buildFaqJsonLd } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'שאלות נפוצות',
  description:
    'תשובות לשאלות נפוצות בנושאי מס, חשבונאות ושירותי משרד מזון. ייעוץ מס, החזרי מס, הנהלת חשבונות ועוד.',
  path: '/faq',
  keywords: ['שאלות נפוצות רואה חשבון', 'מידע מיסוי'],
})

export default function FaqPage() {
  const jsonLd = buildFaqJsonLd(faqItems)

  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title="שאלות נפוצות"
        subtitle="תשובות לשאלות הנפוצות ביותר"
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl mx-auto">
            <AnimateOnScroll preset="fade-in-up">
              <Card>
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </Card>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </PageTransition>
  )
}
