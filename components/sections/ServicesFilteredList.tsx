'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { ServiceCategorySection } from './ServiceCategorySection'
import { ServicesStickyNav } from './ServicesStickyNav'
import { RoundedTransition, RoundedTransitionUp } from '@/components/ui/RoundedTransition'
import type { ServiceCategory } from '@/types/service'

interface ServicesFilteredListProps {
  categories: ServiceCategory[]
}

const categoryStyles: Record<string, { bg: string; bgToken: string; dark: boolean }> = {
  accounting: { bg: '', bgToken: 'bg-bg-main', dark: false },
  tax: { bg: 'bg-bg-dark', bgToken: 'bg-bg-dark', dark: true },
  'audit-consulting': { bg: 'bg-bg-surface', bgToken: 'bg-bg-surface', dark: false },
}

function getStyle(id: string) {
  return categoryStyles[id] ?? { bg: '', bgToken: 'bg-bg-main', dark: false }
}

export function ServicesFilteredList({ categories }: ServicesFilteredListProps) {
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

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
      { rootMargin: '-160px 0px -60% 0px' },
    )

    for (const cat of categories) {
      const el = document.getElementById(`category-${cat.id}`)
      if (el) observer.observe(el)
    }

    observerRef.current = observer
  }, [categories])

  useEffect(() => {
    setupObserver()
    return () => observerRef.current?.disconnect()
  }, [setupObserver])

  return (
    <div>
      <ServicesStickyNav
        categories={categories}
        activeCategoryId={activeCategoryId}
      />

      {categories.map((category, i) => {
        const style = getStyle(category.id)
        const prevBgToken = i > 0 ? getStyle(categories[i - 1].id).bgToken : 'bg-bg-main'

        return (
          <div key={category.id}>
            {i > 0 &&
              (style.dark ? (
                <RoundedTransition from={prevBgToken} to={style.bgToken} />
              ) : (
                <RoundedTransitionUp from={prevBgToken} to={style.bgToken} />
              ))}

            <ServiceCategorySection
              category={category}
              bg={style.bg}
              dark={style.dark}
            />
          </div>
        )
      })}
    </div>
  )
}
