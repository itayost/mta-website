import { ServiceCard } from './ServiceCard'
import { CategoryTestimonial } from './CategoryTestimonial'
import type { ServiceCategory as ServiceCategoryType } from '@/types/service'
import type { Testimonial } from '@/types/testimonial'

interface ServiceCategoryProps {
  category: ServiceCategoryType
  testimonial?: Testimonial
}

export function ServiceCategory({ category, testimonial }: ServiceCategoryProps) {
  const headingId = `heading-${category.id}`

  return (
    <section id={`category-${category.id}`} className="scroll-mt-36" aria-labelledby={headingId}>
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-1 bg-primary rounded-full" />
        <h3 id={headingId} className="text-2xl font-extrabold text-text-primary">{category.title}</h3>
      </div>
      <p className="text-text-muted mb-6">{category.description}</p>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {category.services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      {testimonial && <CategoryTestimonial testimonial={testimonial} />}
    </section>
  )
}
