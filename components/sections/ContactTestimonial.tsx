import Image from 'next/image'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/testimonials'

function getInitials(name: string): string {
  const parts = name.split(' ').filter(Boolean)
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`
  }
  return parts[0]?.[0] ?? ''
}

export function ContactTestimonial() {
  // Use the first testimonial (David Cohen - 15 year relationship)
  const testimonial = testimonials[0]

  return (
    <div className="rounded-2xl bg-bg-surface p-6">
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="size-4 fill-primary text-primary" />
        ))}
      </div>
      <blockquote>
        <p className="text-text-primary italic leading-relaxed">
          &ldquo;{testimonial.content}&rdquo;
        </p>
      </blockquote>
      <footer className="mt-4 flex items-center gap-3">
        {testimonial.image ? (
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={40}
            height={40}
            className="size-10 rounded-full ring-2 ring-primary/20 object-cover"
          />
        ) : (
          <div className="size-10 rounded-full ring-2 ring-primary/20 bg-bg-card flex items-center justify-center">
            <span className="text-xs font-bold text-primary select-none">{getInitials(testimonial.name)}</span>
          </div>
        )}
        <div className="text-sm text-text-muted">
          <span className="font-semibold text-text-primary">{testimonial.name}</span>
          <span className="mx-2">--</span>
          <span>{testimonial.role}</span>
        </div>
      </footer>
    </div>
  )
}
