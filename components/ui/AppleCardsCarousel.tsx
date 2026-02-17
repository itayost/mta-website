'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'motion/react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface CarouselCard {
  id: string
  title: string
  subtitle?: string
  image?: string
  bgColor?: string
  content: React.ReactNode
}

interface AppleCardsCarouselProps {
  cards: CarouselCard[]
  className?: string
}

/* ------------------------------------------------------------------ */
/*  Card                                                               */
/* ------------------------------------------------------------------ */

function Card({
  card,
  index,
  onOpen,
}: {
  card: CarouselCard
  index: number
  onOpen: (index: number) => void
}) {
  return (
    <motion.button
      onClick={() => onOpen(index)}
      className={cn(
        'group relative flex-shrink-0 w-[260px] sm:w-[300px] md:w-[340px] rounded-3xl overflow-hidden cursor-pointer',
        'bg-bg-card aspect-[3/4]'
      )}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Image or color bg */}
      {card.image ? (
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${card.image})` }}
        />
      ) : (
        <div
          className={cn('absolute inset-0', card.bgColor ?? 'bg-bg-surface')}
        />
      )}

      {/* Bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Text */}
      <div className="absolute inset-x-0 bottom-0 p-6 text-start">
        {card.subtitle && (
          <p className="text-sm text-white/70 mb-1">{card.subtitle}</p>
        )}
        <h3 className="text-xl font-bold text-white leading-tight">
          {card.title}
        </h3>
      </div>
    </motion.button>
  )
}

/* ------------------------------------------------------------------ */
/*  Expanded Card (overlay)                                            */
/* ------------------------------------------------------------------ */

function ExpandedCard({
  card,
  onClose,
}: {
  card: CarouselCard
  onClose: () => void
}) {
  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Panel */}
      <motion.div
        className="fixed inset-4 sm:inset-8 md:inset-16 z-50 overflow-y-auto rounded-3xl bg-bg-card"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
        role="dialog"
        aria-modal="true"
        aria-label={card.title}
      >
        {/* Hero area */}
        <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden rounded-t-3xl">
          {card.image ? (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${card.image})` }}
            />
          ) : (
            <div
              className={cn(
                'absolute inset-0',
                card.bgColor ?? 'bg-bg-surface'
              )}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent" />
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 end-4 flex size-10 items-center justify-center rounded-full bg-bg-main/80 backdrop-blur-sm text-text-primary hover:bg-bg-surface transition-colors"
          aria-label="סגור"
        >
          <X className="size-5" />
        </button>

        {/* Content */}
        <div className="p-6 sm:p-10 -mt-12 relative">
          {card.subtitle && (
            <p className="text-sm text-text-muted mb-1">{card.subtitle}</p>
          )}
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6">
            {card.title}
          </h2>
          <div className="text-text-muted leading-relaxed">{card.content}</div>
        </div>
      </motion.div>
    </>
  )
}

/* ------------------------------------------------------------------ */
/*  Carousel                                                           */
/* ------------------------------------------------------------------ */

export function AppleCardsCarousel({
  cards,
  className,
}: AppleCardsCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // Drag-based horizontal scroll
  const x = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 30 })

  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 })

  const updateConstraints = useCallback(() => {
    if (!containerRef.current) return
    const scrollW = containerRef.current.scrollWidth
    const clientW = containerRef.current.clientWidth
    setDragConstraints({
      left: -(scrollW - clientW),
      right: 0,
    })
  }, [])

  useEffect(() => {
    updateConstraints()
    window.addEventListener('resize', updateConstraints)
    return () => window.removeEventListener('resize', updateConstraints)
  }, [updateConstraints])

  const handleClose = useCallback(() => setOpenIndex(null), [])
  const handleOpen = useCallback((i: number) => setOpenIndex(i), [])

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <motion.div
        ref={containerRef}
        className="flex gap-4 sm:gap-6 cursor-grab active:cursor-grabbing px-4 sm:px-6"
        drag="x"
        dragConstraints={dragConstraints}
        style={{ x: springX }}
      >
        {cards.map((card, i) => (
          <Card key={card.id} card={card} index={i} onOpen={handleOpen} />
        ))}
      </motion.div>

      {/* Expanded overlay */}
      <AnimatePresence>
        {openIndex !== null && (
          <ExpandedCard card={cards[openIndex]} onClose={handleClose} />
        )}
      </AnimatePresence>
    </div>
  )
}
