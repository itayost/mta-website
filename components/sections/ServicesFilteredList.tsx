'use client'

import { useMemo } from 'react'
import { ServiceCategorySection } from './ServiceCategorySection'
import { ServicesStickyNav } from './ServicesStickyNav'
import { RoundedTransition, RoundedTransitionUp } from '@/components/ui/RoundedTransition'
import { useScrollSpy } from '@/lib/useScrollSpy'
import type { ServiceCategory } from '@/types/service'

interface ServicesFilteredListProps {
  categories: ServiceCategory[]
}

const categoryStyles: Record<string, { bg: string; bgToken: string; dark: boolean }> = {
  accounting: { bg: '', bgToken: 'bg-bg-main', dark: false },
  tax: { bg: 'bg-bg-surface', bgToken: 'bg-bg-surface', dark: false },
  'audit-consulting': { bg: '', bgToken: 'bg-bg-main', dark: false },
}

function getStyle(id: string) {
  return categoryStyles[id] ?? { bg: '', bgToken: 'bg-bg-main', dark: false }
}

export function ServicesFilteredList({ categories }: ServicesFilteredListProps) {
  const categoryIds = useMemo(
    () => categories.map((c) => `category-${c.id}`),
    [categories],
  )
  const activeCategoryId = useScrollSpy(categoryIds, 'category-')

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
