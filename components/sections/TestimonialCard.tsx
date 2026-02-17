import Image from 'next/image'
import { Star } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import type { Testimonial } from '@/types/testimonial'

interface TestimonialCardProps {
  testimonial: Testimonial
}

function getInitials(name: string): string {
  const parts = name.split(' ').filter(Boolean)
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`
  }
  return parts[0]?.[0] ?? ''
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="flex flex-col min-w-[300px] sm:min-w-0 relative overflow-hidden">
      {/* Top accent bar */}
      <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-l from-transparent via-accent/50 to-transparent" />

      {/* Decorative quote mark */}
      <span className="absolute top-4 end-4 text-7xl leading-none bg-gradient-to-b from-primary/20 to-transparent bg-clip-text text-transparent font-serif select-none" aria-hidden="true">
        &ldquo;
      </span>

      <div className="flex gap-1 mb-3" aria-label={`דירוג: ${testimonial.rating} מתוך 5`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="size-4 fill-accent text-accent" />
        ))}
      </div>
      <blockquote className="flex-1 text-text-muted leading-relaxed mb-4 relative">
        {testimonial.content}
      </blockquote>
      <div className="border-t border-text-muted/10 pt-4 flex items-center gap-3">
        {testimonial.image ? (
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={48}
            height={48}
            className="size-12 rounded-full ring-2 ring-primary/20 object-cover"
          />
        ) : (
          <div className="size-12 rounded-full ring-2 ring-primary/20 bg-bg-surface flex items-center justify-center">
            <span className="text-sm font-bold text-primary select-none">{getInitials(testimonial.name)}</span>
          </div>
        )}
        <div>
          <p className="font-semibold text-text-primary">{testimonial.name}</p>
          <p className="text-sm text-text-muted/60">{testimonial.role}</p>
        </div>
      </div>
    </Card>
  )
}
