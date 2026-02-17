'use client'

import { cn } from '@/lib/utils'

interface ToggleOption<T extends string> {
  value: T
  label: string
}

interface ToggleGroupProps<T extends string> {
  options: [ToggleOption<T>, ToggleOption<T>]
  value: T
  onChange: (value: T) => void
  ariaLabel: string
}

export function ToggleGroup<T extends string>({
  options,
  value,
  onChange,
  ariaLabel,
}: ToggleGroupProps<T>) {
  return (
    <div className="flex rounded-xl bg-bg-surface p-1 mb-6" role="radiogroup" aria-label={ariaLabel}>
      {options.map((option) => (
        <button
          key={option.value}
          role="radio"
          aria-checked={value === option.value}
          onClick={() => onChange(option.value)}
          className={cn(
            'flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all',
            value === option.value
              ? 'bg-primary text-bg-main shadow-sm'
              : 'text-text-muted hover:text-text-primary'
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
