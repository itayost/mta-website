import Image from 'next/image'
import { Star } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { AnimateOnScroll } from '@/components/ui/motion'
import { testimonials } from '@/data/testimonials'

function getInitials(name: string): string {
  const parts = name.split(' ').filter(Boolean)
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`
  }
  return parts[0]?.[0] ?? ''
}

export function AboutTestimonial() {
  const testimonial = testimonials.find((t) => t.id === '3') ?? testimonials[0]

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <AnimateOnScroll preset="fade-in" ease="gentle">
          <div className="relative max-w-3xl mx-auto rounded-3xl bg-bg-surface px-8 py-12 sm:px-16 sm:py-16 text-center">
            <span
              className="absolute -top-6 start-1/2 -translate-x-1/2 text-8xl leading-none text-text-muted/20 font-serif select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <blockquote>
              <p className="text-xl sm:text-2xl italic text-text-primary leading-relaxed">
                {testimonial.content}
              </p>
            </blockquote>

            <div className="mt-6 flex items-center justify-center gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="size-5 fill-primary text-primary" />
              ))}
            </div>

            <footer className="mt-4 flex flex-col items-center gap-3">
              {testimonial.image ? (
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={56}
                  height={56}
                  className="size-14 rounded-full ring-2 ring-primary/20 object-cover"
                />
              ) : (
                <div className="size-14 rounded-full ring-2 ring-primary/20 bg-bg-card flex items-center justify-center">
                  <span className="text-lg font-bold text-primary select-none">{getInitials(testimonial.name)}</span>
                </div>
              )}
              <div className="text-sm text-text-muted">
                <span className="font-semibold text-text-primary">{testimonial.name}</span>
                <span className="mx-2">--</span>
                <span>{testimonial.role}</span>
              </div>
            </footer>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  )
}
