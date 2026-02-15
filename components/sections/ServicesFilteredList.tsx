'use client'

import { useState, useMemo } from 'react'
import { cn } from '@/lib/utils'
import { ServiceCategory } from './ServiceCategory'
import { audienceOptions } from '@/data/services'
import type { ServiceCategory as ServiceCategoryType, Audience } from '@/types/service'

interface ServicesFilteredListProps {
  categories: ServiceCategoryType[]
}

type FilterKey = 'all' | Audience

export function ServicesFilteredList({ categories }: ServicesFilteredListProps) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all')

  const filteredCategories = useMemo(() => {
    if (activeFilter === 'all') return categories

    return categories
      .map((cat) => ({
        ...cat,
        services: cat.services.filter((s) => s.audiences.includes(activeFilter)),
      }))
      .filter((cat) => cat.services.length > 0)
  }, [categories, activeFilter])

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-12 justify-center" role="tablist" aria-label="סינון לפי קהל יעד">
        {audienceOptions.map((option) => (
          <button
            key={option.key}
            role="tab"
            aria-selected={activeFilter === option.key}
            onClick={() => setActiveFilter(option.key)}
            className={cn(
              'rounded-xl px-5 py-2.5 text-sm font-semibold transition-all',
              activeFilter === option.key
                ? 'bg-primary text-bg-main shadow-md shadow-primary/20'
                : 'bg-white/5 backdrop-blur-sm text-text-primary border border-white/10 hover:bg-white/10'
            )}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="space-y-16" role="tabpanel">
        {filteredCategories.map((category) => (
          <ServiceCategory key={category.id} category={category} />
        ))}
        {filteredCategories.length === 0 && (
          <p className="text-center text-text-muted text-lg">
            לא נמצאו שירותים עבור הקטגוריה שנבחרה.
          </p>
        )}
      </div>
    </div>
  )
}
