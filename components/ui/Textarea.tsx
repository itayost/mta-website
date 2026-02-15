import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const textareaId = id || props.name
    const errorId = error ? `${textareaId}-error` : undefined
    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={textareaId} className="text-sm font-medium text-neutral-700">
          {label}
        </label>
        <textarea
          ref={ref}
          id={textareaId}
          aria-describedby={errorId}
          aria-invalid={!!error}
          className={cn(
            'rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 transition-all placeholder:text-neutral-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 resize-y min-h-[120px] disabled:opacity-50 disabled:cursor-not-allowed',
            error && 'border-error-500 focus:border-error-500 focus:ring-error-500/20',
            className
          )}
          {...props}
        />
        {error && (
          <p id={errorId} className="text-sm text-error-600" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
