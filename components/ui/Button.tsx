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
    'border border-primary text-primary bg-transparent hover:bg-primary hover:text-white focus-visible:ring-primary',
  secondary:
    'border border-text-primary/20 text-text-primary bg-transparent hover:bg-bg-surface focus-visible:ring-primary',
  outline:
    'border border-text-muted/30 text-text-primary hover:bg-primary/5 focus-visible:ring-primary',
  ghost:
    'text-text-muted hover:text-text-primary hover:bg-bg-surface focus-visible:ring-primary',
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
        'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ring-offset-bg-main disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]',
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
