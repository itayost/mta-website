import { ServiceCard } from './ServiceCard'
import type { ServiceCategory as ServiceCategoryType } from '@/types/service'

interface ServiceCategoryProps {
  category: ServiceCategoryType
}

export function ServiceCategory({ category }: ServiceCategoryProps) {
  const headingId = `category-${category.id}`

  return (
    <section aria-labelledby={headingId}>
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-1 bg-primary rounded-full" />
        <h3 id={headingId} className="text-2xl font-extrabold text-text-primary">{category.title}</h3>
      </div>
      <p className="text-text-muted mb-6">{category.description}</p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {category.services.map((service, index) => (
          <div key={service.id} className={index === 0 ? 'sm:col-span-2' : ''}>
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </section>
  )
}
