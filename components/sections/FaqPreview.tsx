import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AccordionItem } from '@/components/ui/Accordion'
import { AnimateOnScroll } from '@/components/ui/motion'
import { faqItems } from '@/data/faq'

export function FaqPreview() {
  const topQuestions = faqItems.filter((item) => item.popular).slice(0, 3)

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="שאלות נפוצות"
          subtitle="תשובות מהירות לשאלות הנפוצות ביותר"
        />
        <AnimateOnScroll preset="fade-in-up">
          <div className="max-w-3xl mx-auto rounded-2xl bg-bg-card overflow-hidden">
            {topQuestions.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                className="px-6"
              />
            ))}
          </div>
        </AnimateOnScroll>
        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            <span>לכל השאלות והתשובות</span>
            <ArrowLeft className="size-5" />
          </Link>
        </div>
      </Container>
    </section>
  )
}
