import { Star } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import type { Testimonial } from '@/types/testimonial'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="flex flex-col min-w-[300px] sm:min-w-0 relative">
      {/* Decorative quote mark */}
      <span className="absolute top-4 end-4 text-6xl leading-none text-primary-100 font-serif select-none" aria-hidden="true">
        &ldquo;
      </span>

      <div className="flex gap-1 mb-3" aria-label={`דירוג: ${testimonial.rating} מתוך 5`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="size-4 fill-accent-400 text-accent-400" />
        ))}
      </div>
      <blockquote className="flex-1 text-neutral-700 leading-relaxed mb-4 relative">
        {testimonial.content}
      </blockquote>
      <div className="border-t border-neutral-100 pt-4">
        <p className="font-semibold text-neutral-900">{testimonial.name}</p>
        <p className="text-sm text-neutral-500">{testimonial.role}</p>
      </div>
    </Card>
  )
}
