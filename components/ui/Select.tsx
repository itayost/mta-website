import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  error?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, className, id, children, ...props }, ref) => {
    const selectId = id || props.name
    const errorId = error ? `${selectId}-error` : undefined
    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={selectId} className="text-sm font-medium text-text-muted">
          {label}
          {props.required && <span className="text-error ms-1">*</span>}
        </label>
        <select
          ref={ref}
          id={selectId}
          aria-describedby={errorId}
          aria-invalid={!!error}
          className={cn(
            'rounded-xl border border-border-subtle bg-bg-card px-4 py-3 text-text-primary transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed',
            error && 'border-error focus:border-error focus:ring-error/20',
            className
          )}
          {...props}
        >
          {children}
        </select>
        {error && (
          <p id={errorId} className="text-sm text-error" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'
