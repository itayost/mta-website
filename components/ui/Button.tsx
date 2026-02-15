import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'btn-shimmer bg-primary text-bg-main shadow-md shadow-primary/20 hover:bg-primary-dark hover:text-white hover:shadow-lg hover:shadow-primary/30 focus-visible:ring-primary',
  secondary:
    'bg-accent text-bg-main shadow-sm hover:shadow-md focus-visible:ring-accent',
  outline:
    'border-2 border-white/30 text-text-primary hover:bg-white/10 focus-visible:ring-primary',
  ghost:
    'bg-white/5 backdrop-blur-sm text-text-primary border border-white/10 hover:bg-white/10 focus-visible:ring-primary',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ring-offset-bg-main disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
