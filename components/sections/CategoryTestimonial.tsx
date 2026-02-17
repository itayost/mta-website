import Image from 'next/image'
import { Quote, Star } from 'lucide-react'
import type { Testimonial } from '@/types/testimonial'

interface CategoryTestimonialProps {
  testimonial: Testimonial
}

function getInitials(name: string): string {
  const parts = name.split(' ').filter(Boolean)
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`
  }
  return parts[0]?.[0] ?? ''
}

export function CategoryTestimonial({ testimonial }: CategoryTestimonialProps) {
  return (
    <div className="relative mt-8 rounded-2xl bg-bg-card p-6 sm:p-8">
      <Quote className="absolute top-4 end-4 size-8 text-primary/20" aria-hidden="true" />

      <div className="flex gap-1 mb-3" aria-label={`דירוג ${testimonial.rating} מתוך 5`}>
        {Array.from({ length: testimonial.rating }, (_, i) => (
          <Star key={i} className="size-4 fill-accent text-accent" />
        ))}
      </div>

      <blockquote className="text-text-muted leading-relaxed mb-4">
        &ldquo;{testimonial.content}&rdquo;
      </blockquote>

      <footer className="flex items-center gap-3 text-sm">
        {testimonial.image ? (
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={40}
            height={40}
            className="size-10 rounded-full ring-2 ring-primary/20 object-cover"
          />
        ) : (
          <div className="size-10 rounded-full ring-2 ring-primary/20 bg-bg-surface flex items-center justify-center">
            <span className="text-xs font-bold text-primary select-none">{getInitials(testimonial.name)}</span>
          </div>
        )}
        <div>
          <span className="font-semibold text-text-primary">{testimonial.name}</span>
          <span className="text-text-muted/60 block">{testimonial.role}</span>
        </div>
      </footer>
    </div>
  )
}
