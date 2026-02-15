import { Sparkles } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AccordionItem } from '@/components/ui/Accordion'
import { AnimateOnScroll } from '@/components/ui/motion'
import { faqItems } from '@/data/faq'

export function FaqPopular() {
  const popularItems = faqItems.filter((item) => item.popular)

  if (popularItems.length === 0) return null

  return (
    <section className="py-12 sm:py-16 bg-bg-surface">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="size-5 text-gold" />
            <h2 className="text-lg font-bold text-text-primary">השאלות הכי נפוצות</h2>
          </div>
          <AnimateOnScroll preset="fade-in-up">
            <div className="rounded-2xl border border-white/5 bg-bg-card overflow-hidden">
              {popularItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  className="px-6"
                />
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  )
}
