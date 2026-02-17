'use client'

import { cn } from '@/lib/utils'
import type { ServiceCategory } from '@/types/service'

interface ServicesStickyNavProps {
  categories: ServiceCategory[]
  activeCategoryId: string | null
}

export function ServicesStickyNav({
  categories,
  activeCategoryId,
}: ServicesStickyNavProps) {
  function scrollToCategory(categoryId: string) {
    const el = document.getElementById(`category-${categoryId}`)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="sticky top-[calc(4rem+2px)] sm:top-[calc(5rem+2px)] z-30 bg-bg-main/95 backdrop-blur-xl border-b border-text-muted/10">
      <nav
        className="flex gap-2 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 py-3"
        aria-label="ניווט בין קטגוריות שירותים"
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => scrollToCategory(cat.id)}
            className={cn(
              'shrink-0 rounded-lg px-4 py-1.5 text-sm font-medium transition-colors whitespace-nowrap',
              activeCategoryId === cat.id
                ? 'bg-primary/10 text-primary'
                : 'text-text-muted hover:text-text-primary hover:bg-bg-surface',
            )}
          >
            {cat.title}
          </button>
        ))}
      </nav>
    </div>
  )
}
