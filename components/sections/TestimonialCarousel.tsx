'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { TestimonialCard } from './TestimonialCard'
import { cn } from '@/lib/utils'
import type { Testimonial } from '@/types/testimonial'

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const scrollToIndex = useCallback((index: number) => {
    const container = scrollRef.current
    if (!container) return
    const cards = container.querySelectorAll<HTMLDivElement>('[data-carousel-card]')
    if (cards[index]) {
      cards[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      })
    }
  }, [])

  // Track active card via scroll position
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const onScroll = () => {
      const cards = container.querySelectorAll<HTMLDivElement>('[data-carousel-card]')
      const containerRect = container.getBoundingClientRect()

      let closestIndex = 0
      let closestDistance = Infinity

      cards.forEach((card, i) => {
        const cardRect = card.getBoundingClientRect()
        // In RTL, "start" is the right edge
        const distance = Math.abs(cardRect.right - containerRect.right)
        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = i
        }
      })

      setActiveIndex(closestIndex)
    }

    container.addEventListener('scroll', onScroll, { passive: true })
    return () => container.removeEventListener('scroll', onScroll)
  }, [])

  // Auto-play
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      const next = (activeIndex + 1) % testimonials.length
      scrollToIndex(next)
    }, 5000)

    return () => clearInterval(interval)
  }, [activeIndex, isPaused, testimonials.length, scrollToIndex])

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-snap-x-mandatory pb-4 -mb-4 scrollbar-hide"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            data-carousel-card
            className="min-w-[280px] sm:min-w-[340px] lg:min-w-[300px] flex-shrink-0 snap-start"
            style={{ scrollSnapAlign: 'start' }}
          >
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="ביקורות לקוחות">
        {testimonials.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === activeIndex}
            aria-label={`ביקורת ${i + 1}`}
            onClick={() => scrollToIndex(i)}
            className={cn(
              'size-2.5 rounded-full transition-all duration-300',
              i === activeIndex
                ? 'bg-primary scale-125'
                : 'bg-white/20 hover:bg-white/30'
            )}
          />
        ))}
      </div>
    </div>
  )
}
