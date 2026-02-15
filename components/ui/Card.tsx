import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glass?: boolean
}

export function Card({ children, className, hover = false, glass = false }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm',
        hover && 'transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 hover:border-primary-200',
        glass && 'backdrop-blur-md bg-white/80 border-white/30',
        className
      )}
    >
      {children}
    </div>
  )
}
