import type { Metadata } from 'next'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/sections/PageHero'
import { AccordionItem } from '@/components/ui/Accordion'
import { PageTransition, AnimateOnScroll } from '@/components/ui/motion'
import { faqItems, faqCategoryLabels, type FaqCategory } from '@/data/faq'
import { generatePageMetadata, buildFaqJsonLd } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'שאלות נפוצות',
  description:
    'תשובות לשאלות נפוצות בנושאי מס, חשבונאות ושירותי משרד מזון. ייעוץ מס, החזרי מס, הנהלת חשבונות ועוד.',
  path: '/faq',
  keywords: ['שאלות נפוצות רואה חשבון', 'מידע מיסוי'],
})

const categoryOrder: FaqCategory[] = ['services', 'pricing', 'practical']

export default function FaqPage() {
  const jsonLd = buildFaqJsonLd(faqItems)

  const groupedFaq = categoryOrder.map((cat) => ({
    category: cat,
    label: faqCategoryLabels[cat],
    items: faqItems.filter((item) => item.category === cat),
  }))

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
          <div className="max-w-3xl mx-auto space-y-12">
            {groupedFaq.map((group, groupIndex) => (
              <AnimateOnScroll key={group.category} preset="fade-in-up" delay={groupIndex * 0.1}>
                <div>
                  <h2 className="text-xl font-extrabold text-text-primary mb-4 flex items-center gap-3">
                    <div className="w-6 h-1 bg-primary rounded-full" />
                    {group.label}
                  </h2>
                  <div className="rounded-2xl border border-white/5 bg-bg-card overflow-hidden">
                    {group.items.map((item, index) => (
                      <AccordionItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        className="px-6"
                      />
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* "Didn't find an answer?" CTA */}
      <section className="py-16 sm:py-20 bg-bg-surface">
        <Container>
          <div className="max-w-xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
                <MessageCircle className="size-7 text-primary" />
              </div>
            </div>
            <h2 className="text-2xl font-extrabold text-text-primary mb-3">
              לא מצאתם תשובה?
            </h2>
            <p className="text-text-muted mb-6">
              צוות המשרד ישמח לענות על כל שאלה. פנו אלינו ונחזור אליכם בהקדם.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-primary px-6 py-3 text-base font-semibold text-bg-main shadow-md shadow-primary/20 hover:bg-primary-dark hover:text-white hover:shadow-lg transition-all active:scale-[0.98] btn-shimmer"
            >
              צרו קשר
            </Link>
          </div>
        </Container>
      </section>
    </PageTransition>
  )
}
