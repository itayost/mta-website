'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { testimonials } from '@/data/testimonials'

export function AnimatedTestimonials() {
  const [active, setActive] = useState(0)
  // Deterministic rotations to avoid hydration mismatch (Math.random differs server vs client)
  const rotations = testimonials.map((_, i) => ((i * 7 + 3) % 21) - 10)

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(handleNext, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 sm:py-24 bg-bg-surface">
      <Container>
        <SectionHeading
          title="מה הלקוחות אומרים"
          subtitle="אלפי לקוחות מרוצים לאורך עשרות שנים"
        />

        <div className="mx-auto max-w-4xl">
          <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            {/* Image stack */}
            <div className="relative h-72 sm:h-80">
              <AnimatePresence>
                {testimonials.map((t, index) => (
                  <motion.div
                    key={t.id}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      rotate: rotations[index],
                    }}
                    animate={{
                      opacity: index === active ? 1 : 0.7,
                      scale: index === active ? 1 : 0.95,
                      rotate: index === active ? 0 : rotations[index],
                      zIndex: index === active ? 40 : testimonials.length - index,
                      y: index === active ? [0, -20, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      rotate: rotations[index],
                    }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="absolute inset-0 origin-bottom"
                  >
                    {t.image ? (
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="rounded-2xl object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center rounded-2xl bg-bg-card">
                        <span className="text-7xl font-black text-primary/20">
                          {t.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Text content */}
            <div className="flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                >
                  <h3 className="text-2xl font-bold text-text-primary">
                    {testimonials[active].name}
                  </h3>
                  <p className="text-sm text-text-muted mt-1">
                    {testimonials[active].role}
                  </p>
                  <p className="mt-6 text-lg text-text-muted leading-relaxed">
                    &ldquo;{testimonials[active].content}&rdquo;
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center gap-4 mt-8">
                <button
                  onClick={handlePrev}
                  className="flex size-10 items-center justify-center rounded-full bg-bg-card hover:bg-primary/5 transition-colors"
                  aria-label="עדות קודמת"
                >
                  <ChevronRight className="size-5 text-text-primary" />
                </button>
                <button
                  onClick={handleNext}
                  className="flex size-10 items-center justify-center rounded-full bg-bg-card hover:bg-primary/5 transition-colors"
                  aria-label="עדות הבאה"
                >
                  <ChevronLeft className="size-5 text-text-primary" />
                </button>
                <div className="flex gap-1.5 ms-4">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={cn(
                        'size-2 rounded-full transition-all',
                        i === active ? 'bg-primary w-6' : 'bg-text-muted/30'
                      )}
                      aria-label={`עדות ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}
