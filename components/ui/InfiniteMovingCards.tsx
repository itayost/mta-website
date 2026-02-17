'use client'

import { cn } from '@/lib/utils'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface MovingCard {
  id: string
  title: string
  description?: string
  image?: string
  href?: string
  meta?: string
}

interface InfiniteMovingCardsProps {
  items: MovingCard[]
  direction?: 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
  pauseOnHover?: boolean
  className?: string
  renderCard?: (item: MovingCard) => React.ReactNode
}

/* ------------------------------------------------------------------ */
/*  Speed map                                                          */
/* ------------------------------------------------------------------ */

const speedMap = {
  fast: '20s',
  normal: '35s',
  slow: '50s',
}

/* ------------------------------------------------------------------ */
/*  Default card renderer                                              */
/* ------------------------------------------------------------------ */

function DefaultCard({ item }: { item: MovingCard }) {
  const Wrapper = item.href ? 'a' : 'div'
  const extraProps = item.href
    ? { href: item.href, className: 'block' }
    : {}

  return (
    <Wrapper
      {...extraProps}
      className={cn(
        'relative flex-shrink-0 w-[280px] sm:w-[320px] rounded-2xl bg-bg-card p-5 transition-colors hover:bg-bg-surface',
        extraProps.className
      )}
    >
      {item.image && (
        <div
          className="w-full h-36 rounded-xl bg-cover bg-center mb-4"
          style={{ backgroundImage: `url(${item.image})` }}
        />
      )}
      <h4 className="text-base font-semibold text-text-primary leading-snug line-clamp-2">
        {item.title}
      </h4>
      {item.description && (
        <p className="mt-2 text-sm text-text-muted line-clamp-2">
          {item.description}
        </p>
      )}
      {item.meta && (
        <p className="mt-2 text-xs text-text-muted/60">{item.meta}</p>
      )}
    </Wrapper>
  )
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function InfiniteMovingCards({
  items,
  direction = 'left',
  speed = 'normal',
  pauseOnHover = true,
  className,
  renderCard,
}: InfiniteMovingCardsProps) {
  // Render items twice in JSX for seamless loop (no DOM cloning needed)
  const doubledItems = [...items, ...items]

  return (
    <div
      className={cn(
        'relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]',
        className
      )}
    >
      <ul
        className={cn(
          'flex min-w-full gap-4 py-2 animate-[scroll_var(--animation-duration)_linear_infinite_var(--animation-direction)]',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
        style={
          {
            '--animation-duration': speedMap[speed],
            '--animation-direction': direction === 'left' ? 'normal' : 'reverse',
          } as React.CSSProperties
        }
      >
        {doubledItems.map((item, index) => (
          <li
            key={`${item.id}-${index}`}
            className="flex-shrink-0"
            aria-hidden={index >= items.length || undefined}
          >
            {renderCard ? renderCard(item) : <DefaultCard item={item} />}
          </li>
        ))}
      </ul>
    </div>
  )
}
