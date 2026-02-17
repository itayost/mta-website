import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AnimateOnScroll } from '@/components/ui/motion'
import { TestimonialCarousel } from './TestimonialCarousel'
import { testimonials } from '@/data/testimonials'

function getInitials(name: string): string {
  const parts = name.split(' ').filter(Boolean)
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`
  }
  return parts[0]?.[0] ?? ''
}

export function Testimonials() {
  const pullQuote = testimonials[0]

  return (
    <section className="py-16 sm:py-24 bg-bg-surface">
      <Container>
        <AnimateOnScroll preset="fade-in-up">
          <SectionHeading
            title="מה הלקוחות אומרים"
            subtitle="אלפי לקוחות מרוצים לאורך עשרות שנים"
          />
        </AnimateOnScroll>

        {/* Pull quote highlight */}
        {pullQuote && (
          <AnimateOnScroll preset="fade-in" ease="gentle">
            <blockquote className="relative max-w-2xl mx-auto text-center mb-12">
              <span
                className="absolute -top-6 start-1/2 -translate-x-1/2 text-8xl leading-none text-text-muted/20 font-serif select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="text-xl sm:text-2xl italic text-text-primary leading-relaxed">
                {pullQuote.content}
              </p>
              <footer className="mt-4 flex flex-col items-center gap-3">
                {pullQuote.image ? (
                  <Image
                    src={pullQuote.image}
                    alt={pullQuote.name}
                    width={56}
                    height={56}
                    className="size-14 rounded-full ring-2 ring-primary/20 object-cover"
                  />
                ) : (
                  <div className="size-14 rounded-full ring-2 ring-primary/20 bg-bg-card flex items-center justify-center">
                    <span className="text-lg font-bold text-primary select-none">{getInitials(pullQuote.name)}</span>
                  </div>
                )}
                <div className="text-sm text-text-muted">
                  <span className="font-semibold text-text-primary">{pullQuote.name}</span>
                  <span className="mx-2">--</span>
                  <span>{pullQuote.role}</span>
                </div>
              </footer>
            </blockquote>
          </AnimateOnScroll>
        )}

        <AnimateOnScroll preset="scale-in" ease="gentle">
          <TestimonialCarousel testimonials={testimonials} />
        </AnimateOnScroll>
      </Container>
    </section>
  )
}
