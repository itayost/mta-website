'use client'

import { useState, useMemo, useEffect, useRef, useCallback } from 'react'
import { ServiceCategory } from './ServiceCategory'
import { ServicesStickyNav } from './ServicesStickyNav'
import { getTestimonialForCategory } from '@/data/testimonials'
import type { ServiceCategory as ServiceCategoryType, Audience } from '@/types/service'

interface ServicesFilteredListProps {
  categories: ServiceCategoryType[]
}

type FilterKey = 'all' | Audience

export function ServicesFilteredList({ categories }: ServicesFilteredListProps) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all')
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const filteredCategories = useMemo(() => {
    if (activeFilter === 'all') return categories

    return categories
      .map((cat) => ({
        ...cat,
        services: cat.services.filter((s) => s.audiences.includes(activeFilter)),
      }))
      .filter((cat) => cat.services.length > 0)
  }, [categories, activeFilter])

  const setupObserver = useCallback(() => {
    observerRef.current?.disconnect()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id.replace('category-', '')
            setActiveCategoryId(id)
          }
        }
      },
      { rootMargin: '-160px 0px -60% 0px' }
    )

    for (const cat of filteredCategories) {
      const el = document.getElementById(`category-${cat.id}`)
      if (el) observer.observe(el)
    }

    observerRef.current = observer
  }, [filteredCategories])

  useEffect(() => {
    setupObserver()
    return () => observerRef.current?.disconnect()
  }, [setupObserver])

  const testimonialMap = useMemo(() => {
    const map = new Map<string, ReturnType<typeof getTestimonialForCategory>>()
    for (const cat of categories) {
      map.set(cat.id, getTestimonialForCategory(cat.id))
    }
    return map
  }, [categories])

  return (
    <div>
      <ServicesStickyNav
        categories={filteredCategories}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        activeCategoryId={activeCategoryId}
      />

      <div className="space-y-16 pt-8" role="tabpanel">
        {filteredCategories.map((category) => (
          <ServiceCategory
            key={category.id}
            category={category}
            testimonial={testimonialMap.get(category.id)}
          />
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
