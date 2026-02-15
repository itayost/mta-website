import { Quote, Star } from 'lucide-react'
import type { Testimonial } from '@/types/testimonial'

interface CategoryTestimonialProps {
  testimonial: Testimonial
}

export function CategoryTestimonial({ testimonial }: CategoryTestimonialProps) {
  return (
    <div className="relative mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <Quote className="absolute top-4 end-4 size-8 text-primary/20" aria-hidden="true" />

      <div className="flex gap-1 mb-3" aria-label={`דירוג ${testimonial.rating} מתוך 5`}>
        {Array.from({ length: testimonial.rating }, (_, i) => (
          <Star key={i} className="size-4 fill-accent text-accent" />
        ))}
      </div>

      <blockquote className="text-text-muted leading-relaxed mb-4">
        &ldquo;{testimonial.content}&rdquo;
      </blockquote>

      <footer className="text-sm">
        <span className="font-semibold text-text-primary">{testimonial.name}</span>
        <span className="text-text-muted/60"> — {testimonial.role}</span>
      </footer>
    </div>
  )
}
