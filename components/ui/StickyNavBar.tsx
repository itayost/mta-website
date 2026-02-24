import { cn } from '@/lib/utils'

interface StickyNavBarProps {
  bg?: 'bg-bg-main' | 'bg-bg-surface'
  ariaLabel?: string
  className?: string
  children: React.ReactNode
}

export function StickyNavBar({ bg = 'bg-bg-main', ariaLabel, className, children }: StickyNavBarProps) {
  const bgClass = bg === 'bg-bg-surface' ? 'bg-bg-surface/95' : 'bg-bg-main/95'

  return (
    <div
      className={cn(
        'sticky top-[calc(4rem+2px)] sm:top-[calc(5rem+2px)] z-30 backdrop-blur-xl border-b border-text-muted/10',
        bgClass,
        className,
      )}
    >
      <nav
        className="flex sm:justify-center gap-2 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 touch-manipulation"
        aria-label={ariaLabel}
      >
        {children}
      </nav>
    </div>
  )
}
