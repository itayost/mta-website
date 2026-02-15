import { Star } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { AnimateOnScroll } from '@/components/ui/motion'
import { testimonials } from '@/data/testimonials'

export function AboutTestimonial() {
  const testimonial = testimonials.find((t) => t.id === '3') ?? testimonials[0]

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <AnimateOnScroll preset="fade-in" ease="gentle">
          <div className="relative max-w-3xl mx-auto rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm px-8 py-12 sm:px-16 sm:py-16 text-center">
            <span
              className="absolute -top-6 start-1/2 -translate-x-1/2 text-8xl leading-none text-gold/20 font-serif select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <blockquote>
              <p className="text-xl sm:text-2xl italic text-text-primary/90 leading-relaxed">
                {testimonial.content}
              </p>
            </blockquote>

            <div className="mt-6 flex items-center justify-center gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="size-5 fill-gold text-gold" />
              ))}
            </div>

            <footer className="mt-4 text-sm text-text-muted">
              <span className="font-semibold text-text-primary">{testimonial.name}</span>
              <span className="mx-2">—</span>
              <span>{testimonial.role}</span>
            </footer>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  )
}
