'use client'

import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

interface AccordionItemProps {
  question: string
  answer: string
  className?: string
}

export function AccordionItem({ question, answer, className }: AccordionItemProps) {
  return (
    <details
      className={cn(
        'group border-b border-neutral-200 [&_summary::-webkit-details-marker]:hidden',
        className
      )}
    >
      <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 text-lg font-medium text-neutral-900 hover:text-primary-600 transition-colors">
        <span>{question}</span>
        <ChevronDown className="size-5 shrink-0 text-neutral-500 transition-transform duration-200 group-open:rotate-180" />
      </summary>
      <div className="grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-[grid-template-rows] duration-200">
        <div className="overflow-hidden">
          <div className="pb-5 text-neutral-600 leading-relaxed group-open:bg-neutral-50/50 -mx-4 px-4 rounded-lg">{answer}</div>
        </div>
      </div>
    </details>
  )
}
