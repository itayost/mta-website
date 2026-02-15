import { cn } from '@/lib/utils'

interface WaveDividerProps {
  color?: string
  flipped?: boolean
  className?: string
}

export function WaveDivider({
  color = 'fill-bg-surface',
  flipped = false,
  className,
}: WaveDividerProps) {
  return (
    <div
      className={cn(
        'h-16 sm:h-24 -mt-px',
        flipped && 'rotate-180',
        className
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={cn('w-full h-full', color)}
      >
        <path d="M0,0 C200,80 400,120 600,80 C800,40 1000,80 1200,0 L1200,120 L0,120 Z" />
      </svg>
    </div>
  )
}
