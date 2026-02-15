'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { AccordionItem } from '@/components/ui/Accordion'
import { faqItems, faqCategoryLabels, type FaqCategory } from '@/data/faq'

const categoryOrder: FaqCategory[] = ['services', 'pricing', 'practical']

const categoryIcons: Record<FaqCategory, string> = {
  services: 'השירותים',
  pricing: 'מחירים',
  practical: 'מעשי',
}

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
    <section className="py-16 sm:py-24">
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
              className="w-full rounded-2xl bg-bg-card border border-white/10 ps-12 pe-4 py-4 text-text-primary placeholder:text-text-muted/40 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
            />
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="סינון לפי קטגוריה">
            <button
              role="tab"
              aria-selected={activeCategory === 'all'}
              onClick={() => setActiveCategory('all')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-primary text-bg-main shadow-md shadow-primary/20'
                  : 'bg-white/5 text-text-muted border border-white/10 hover:bg-white/10'
              }`}
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
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-primary text-bg-main shadow-md shadow-primary/20'
                      : 'bg-white/5 text-text-muted border border-white/10 hover:bg-white/10'
                  }`}
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
                <div key={group.category}>
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
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
