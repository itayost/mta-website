import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl bg-bg-card p-6',
        hover && 'transition-all duration-300 hover:bg-bg-surface hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  )
}
