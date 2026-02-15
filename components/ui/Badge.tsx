import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'accent' | 'neutral' | 'success' | 'error'
  className?: string
}

const variantStyles = {
  primary: 'bg-primary-100 text-primary-700',
  accent: 'bg-accent-100 text-accent-600',
  neutral: 'bg-neutral-100 text-neutral-600',
  success: 'bg-green-100 text-green-700',
  error: 'bg-red-100 text-red-700',
}

export function Badge({ children, variant = 'primary', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
