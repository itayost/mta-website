import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TestimonialCard } from './TestimonialCard'
import { testimonials } from '@/data/testimonials'

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-neutral-50">
      <Container>
        <SectionHeading
          title="מה הלקוחות אומרים"
          subtitle="אלפי לקוחות מרוצים לאורך עשרות שנים"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  )
}
