import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/Container'
import type { ServiceCategory } from '@/types/service'

interface ServiceCategorySectionProps {
  category: ServiceCategory
  bg?: string
  dark?: boolean
}

/* Bento pattern: alternating [span-2, span-1] / [span-1, span-2] rows
   in a 3-col grid. Every 5 items fills exactly 2 rows of 3. */
function getBentoSpan(index: number): string {
  const mod = index % 5
  if (mod === 0 || mod === 3) return 'sm:col-span-2'
  return ''
}

export function ServiceCategorySection({
  category,
  bg = '',
  dark = false,
}: ServiceCategorySectionProps) {
  const headingId = `heading-${category.id}`

  return (
    <section
      id={`category-${category.id}`}
      className={cn(bg, 'scroll-mt-36 py-16 sm:py-24')}
      aria-labelledby={headingId}
    >
      <Container>
        <div className="mb-12 text-center">
          <h2
            id={headingId}
            className={cn(
              'text-4xl font-extrabold sm:text-5xl',
              dark ? 'text-white' : 'text-text-primary',
            )}
          >
            {category.title}
          </h2>
          {category.description && (
            <p
              className={cn(
                'mt-4 font-light text-xl max-w-2xl mx-auto',
                dark ? 'text-white/60' : 'text-text-muted',
              )}
            >
              {category.description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {category.services.map((service, i) => (
            <div
              key={service.id}
              className={cn(
                'rounded-2xl p-8 h-full flex flex-col',
                getBentoSpan(i),
                dark
                  ? 'bg-white/5 border border-white/10'
                  : 'bg-bg-card border border-white/5',
              )}
            >
              <span
                className={cn(
                  'text-sm font-medium',
                  dark ? 'text-white/30' : 'text-text-muted/50',
                )}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <div
                className={cn(
                  'my-5 h-px',
                  dark ? 'bg-white/10' : 'bg-text-muted/10',
                )}
              />

              <h3
                className={cn(
                  'text-xl font-bold',
                  dark ? 'text-white' : 'text-text-primary',
                )}
              >
                {service.title}
              </h3>

              <p
                className={cn(
                  'mt-3 text-sm leading-relaxed',
                  dark ? 'text-white/60' : 'text-text-muted',
                )}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
