'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { AccordionItem } from '@/components/ui/Accordion'
import { AnimateOnScroll } from '@/components/ui/motion'
import { cn } from '@/lib/utils'
import { faqItems, faqCategoryLabels, type FaqCategory } from '@/data/faq'

const categoryOrder: FaqCategory[] = ['services', 'pricing', 'practical']

export function FaqSearch() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<FaqCategory | 'all'>('all')

  const filtered = faqItems.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory
    const matchesQuery =
      query.trim() === '' ||
      item.question.includes(query) ||
      item.answer.includes(query)
    return matchesCategory && matchesQuery
  })

  const grouped = activeCategory === 'all'
    ? categoryOrder.map((cat) => ({
        category: cat,
        label: faqCategoryLabels[cat],
        items: filtered.filter((item) => item.category === cat),
      })).filter((g) => g.items.length > 0)
    : [{
        category: activeCategory,
        label: faqCategoryLabels[activeCategory],
        items: filtered,
      }]

  return (
    <section className="py-16 sm:py-24 bg-bg-surface">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Search bar */}
          <div className="relative mb-8">
            <Search className="absolute start-4 top-1/2 -translate-y-1/2 size-5 text-text-muted/60 pointer-events-none" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="חפשו שאלה..."
              className="w-full rounded-2xl bg-bg-card border border-text-muted/10 ps-12 pe-4 py-4 text-text-primary placeholder:text-text-muted/40 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
            />
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="סינון לפי קטגוריה">
            <button
              role="tab"
              aria-selected={activeCategory === 'all'}
              onClick={() => setActiveCategory('all')}
              className={cn(
                'rounded-lg px-4 py-2 text-sm font-medium transition-all',
                activeCategory === 'all'
                  ? 'bg-primary/10 text-primary'
                  : 'bg-bg-card text-text-muted hover:text-text-primary hover:bg-bg-card/80',
              )}
            >
              הכל ({faqItems.length})
            </button>
            {categoryOrder.map((cat) => {
              const count = faqItems.filter((i) => i.category === cat).length
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    'rounded-lg px-4 py-2 text-sm font-medium transition-all',
                    activeCategory === cat
                      ? 'bg-primary/10 text-primary'
                      : 'bg-bg-card text-text-muted hover:text-text-primary hover:bg-bg-card/80',
                  )}
                >
                  {faqCategoryLabels[cat]} ({count})
                </button>
              )
            })}
          </div>

          {/* Results */}
          {filtered.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-text-muted text-lg">לא נמצאו תוצאות עבור &ldquo;{query}&rdquo;</p>
              <button
                onClick={() => { setQuery(''); setActiveCategory('all') }}
                className="mt-3 text-sm text-primary hover:text-primary-dark transition-colors"
              >
                נקו חיפוש
              </button>
            </div>
          ) : (
            <div className="space-y-10" role="tabpanel">
              {grouped.map((group) => (
                <AnimateOnScroll key={group.category} preset="fade-in-up">
                  <h2 className="text-xl font-extrabold text-text-primary mb-4 flex items-center gap-3">
                    <div className="w-6 h-1 bg-primary rounded-full" />
                    {group.label}
                  </h2>
                  <div className="rounded-2xl bg-bg-card overflow-hidden">
                    {group.items.map((item, index) => (
                      <AccordionItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        className="px-6"
                      />
                    ))}
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
