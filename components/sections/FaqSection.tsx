import type { ReactNode } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AccordionItem } from '@/components/ui/Accordion'
import { AnimateOnScroll } from '@/components/ui/motion'

interface FaqItem {
  question: string
  answer: string
}

interface FaqSectionProps {
  title: string
  subtitle: string
  items: FaqItem[]
  footer?: ReactNode
  sectionClassName?: string
}

export function FaqSection({
  title,
  subtitle,
  items,
  footer,
  sectionClassName = 'py-16 sm:py-20',
}: FaqSectionProps) {
  return (
    <section className={sectionClassName}>
      <Container>
        <SectionHeading title={title} subtitle={subtitle} />
        <AnimateOnScroll preset="fade-in-up">
          <div className="max-w-3xl mx-auto rounded-2xl bg-bg-card overflow-hidden">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                className="px-6"
              />
            ))}
          </div>
          {footer}
        </AnimateOnScroll>
      </Container>
    </section>
  )
}
