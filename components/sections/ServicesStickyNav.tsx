'use client'

import { cn } from '@/lib/utils'
import { StickyNavBar } from '@/components/ui/StickyNavBar'
import type { ServiceCategory } from '@/types/service'

interface ServicesStickyNavProps {
  categories: ServiceCategory[]
  activeCategoryId: string | null
}

export function ServicesStickyNav({ categories, activeCategoryId }: ServicesStickyNavProps) {
  function scrollToCategory(categoryId: string) {
    const el = document.getElementById(`category-${categoryId}`)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <StickyNavBar ariaLabel="ניווט בין קטגוריות שירותים">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => scrollToCategory(cat.id)}
          className={cn(
            'shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap min-h-[44px] flex items-center',
            activeCategoryId === cat.id
              ? 'bg-primary text-white'
              : 'text-text-muted hover:text-text-primary hover:bg-bg-surface',
          )}
        >
          {cat.title}
        </button>
      ))}
    </StickyNavBar>
  )
}
