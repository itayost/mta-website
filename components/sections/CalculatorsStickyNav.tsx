'use client'

import { cn } from '@/lib/utils'
import { useScrollSpy, scrollToElement } from '@/lib/useScrollSpy'
import { StickyNavBar } from '@/components/ui/StickyNavBar'

const calculators = [
  { id: 'currency-converter', title: 'המרת מטבעות' },
  { id: 'exchange-rates', title: 'שערי חליפין' },
  { id: 'mortgage', title: 'משכנתא' },
  { id: 'savings', title: 'חיסכון' },
  { id: 'inflation', title: 'אינפלציה' },
]

const calcIds = calculators.map((c) => c.id)

export function CalculatorsStickyNav() {
  const activeId = useScrollSpy(calcIds)

  return (
    <StickyNavBar ariaLabel="ניווט בין מחשבונים">
      {calculators.map((calc) => (
        <button
          key={calc.id}
          onClick={() => scrollToElement(calc.id)}
          className={cn(
            'shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap min-h-[44px] flex items-center',
            activeId === calc.id
              ? 'bg-primary text-white'
              : 'text-text-muted hover:text-text-primary hover:bg-bg-surface',
          )}
        >
          {calc.title}
        </button>
      ))}
    </StickyNavBar>
  )
}
