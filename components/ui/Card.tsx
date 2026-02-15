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
        'rounded-2xl border border-white/5 bg-bg-card p-6 shadow-sm',
        hover && 'transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 hover:border-white/10',
        glass && 'backdrop-blur-sm bg-white/5 border-white/10 hover:bg-white/10',
        className
      )}
    >
      {children}
    </div>
  )
}
