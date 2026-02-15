'use client'

import { cn } from '@/lib/utils'
import { audienceOptions } from '@/data/services'
import type { ServiceCategory, Audience } from '@/types/service'

type FilterKey = 'all' | Audience

interface ServicesStickyNavProps {
  categories: ServiceCategory[]
  activeFilter: FilterKey
  onFilterChange: (filter: FilterKey) => void
  activeCategoryId: string | null
}

export function ServicesStickyNav({
  categories,
  activeFilter,
  onFilterChange,
  activeCategoryId,
}: ServicesStickyNavProps) {
  function scrollToCategory(categoryId: string) {
    const el = document.getElementById(`category-${categoryId}`)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="sticky top-[calc(4rem+2px)] sm:top-[calc(5rem+2px)] z-30 bg-bg-main/95 backdrop-blur-xl border-b border-white/5 -mx-4 px-4 sm:-mx-0 sm:px-0">
      {/* Category links row */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide py-3" role="navigation" aria-label="ניווט בין קטגוריות שירותים">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => scrollToCategory(cat.id)}
            className={cn(
              'shrink-0 rounded-lg px-4 py-1.5 text-sm font-medium transition-colors whitespace-nowrap',
              activeCategoryId === cat.id
                ? 'bg-primary/10 text-primary'
                : 'text-text-muted hover:text-text-primary hover:bg-white/5'
            )}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Audience filter tabs row */}
      <div className="flex flex-wrap gap-2 pb-3" role="tablist" aria-label="סינון לפי קהל יעד">
        {audienceOptions.map((option) => (
          <button
            key={option.key}
            role="tab"
            aria-selected={activeFilter === option.key}
            onClick={() => onFilterChange(option.key)}
            className={cn(
              'rounded-xl px-4 py-2 text-sm font-semibold transition-all',
              activeFilter === option.key
                ? 'bg-primary text-bg-main shadow-md shadow-primary/20'
                : 'bg-white/5 backdrop-blur-sm text-text-primary border border-white/10 hover:bg-white/10'
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}
