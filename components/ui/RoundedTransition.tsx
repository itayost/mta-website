import { cn } from '@/lib/utils'

interface RoundedTransitionProps {
  from?: string
  to?: string
  className?: string
}

export function RoundedTransition({
  from = 'bg-bg-main',
  to = 'bg-bg-surface',
  className,
}: RoundedTransitionProps) {
  return (
    <div className={cn(to, className)} aria-hidden="true">
      <div className={cn(from, 'h-12 sm:h-16 rounded-b-[2rem]')} />
    </div>
  )
}

export function RoundedTransitionUp({
  from = 'bg-bg-surface',
  to = 'bg-bg-main',
  className,
}: RoundedTransitionProps) {
  return (
    <div className={cn(from, className)} aria-hidden="true">
      <div className={cn(to, 'h-12 sm:h-16 rounded-t-[2rem]')} />
    </div>
  )
}
