import { Star } from 'lucide-react'
import { testimonials } from '@/data/testimonials'

export function ContactTestimonial() {
  // Use the first testimonial (David Cohen - 15 year relationship)
  const testimonial = testimonials[0]

  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-6">
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="size-4 fill-gold text-gold" />
        ))}
      </div>
      <blockquote>
        <p className="text-text-primary/90 italic leading-relaxed">
          &ldquo;{testimonial.content}&rdquo;
        </p>
      </blockquote>
      <footer className="mt-4 text-sm text-text-muted">
        <span className="font-semibold text-text-primary">{testimonial.name}</span>
        <span className="mx-2">—</span>
        <span>{testimonial.role}</span>
      </footer>
    </div>
  )
}
