'use client'

import { Container } from '@/components/ui/Container'
import { AccordionItem } from '@/components/ui/Accordion'
import { StickyNavBar } from '@/components/ui/StickyNavBar'
import { AnimateOnScroll } from '@/components/ui/motion'
import { useScrollSpy, scrollToElement } from '@/lib/useScrollSpy'
import { cn } from '@/lib/utils'
import { faqItems, faqCategoryLabels, type FaqCategory } from '@/data/faq'

const categoryOrder: FaqCategory[] = ['services', 'pricing', 'practical']

const grouped = categoryOrder
  .map((cat) => ({
    category: cat,
    label: faqCategoryLabels[cat],
    items: faqItems.filter((item) => item.category === cat),
  }))
  .filter((g) => g.items.length > 0)

const faqSectionIds = categoryOrder.map((cat) => `faq-${cat}`)

export function FaqSearch() {
  const activeCategory = useScrollSpy(faqSectionIds, 'faq-')

  return (
    <section className="bg-bg-surface">
      <StickyNavBar ariaLabel="ניווט בין קטגוריות שאלות">
        {categoryOrder.map((cat) => (
          <button
            key={cat}
            onClick={() => scrollToElement(`faq-${cat}`)}
            className={cn(
              'shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap min-h-[44px] flex items-center',
              activeCategory === cat
                ? 'bg-primary text-white'
                : 'text-text-muted hover:text-text-primary hover:bg-bg-main',
            )}
          >
            {faqCategoryLabels[cat]}
          </button>
        ))}
      </StickyNavBar>

      {/* Accordion content */}
      <div className="py-12 sm:py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-10">
              {grouped.map((group) => (
                <div key={group.category} id={`faq-${group.category}`} className="scroll-mt-32 sm:scroll-mt-36">
                  <AnimateOnScroll preset="fade-in-up">
                    <h2 className="font-display text-xl font-extrabold tracking-tight text-text-primary mb-4 flex items-center gap-3">
                      <div className="w-6 h-1 bg-primary rounded-full" />
                      {group.label}
                    </h2>
                    <div className="rounded-2xl bg-bg-card overflow-hidden">
                      {group.items.map((item) => (
                        <AccordionItem
                          key={item.id}
                          question={item.question}
                          answer={item.answer}
                          className="px-4 sm:px-6"
                        />
                      ))}
                    </div>
                  </AnimateOnScroll>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
