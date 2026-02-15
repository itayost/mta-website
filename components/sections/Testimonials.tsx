import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AnimateOnScroll } from '@/components/ui/motion'
import { TestimonialCarousel } from './TestimonialCarousel'
import { testimonials } from '@/data/testimonials'

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-bg-surface">
      <Container>
        <AnimateOnScroll preset="fade-in-up">
          <SectionHeading
            title="מה הלקוחות אומרים"
            subtitle="אלפי לקוחות מרוצים לאורך עשרות שנים"
          />
        </AnimateOnScroll>
        <AnimateOnScroll preset="scale-in" ease="gentle">
          <TestimonialCarousel testimonials={testimonials} />
        </AnimateOnScroll>
      </Container>
    </section>
  )
}
