import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/Container'

type PageHeroVariant = 'default' | 'about' | 'editorial' | 'minimal'

interface PageHeroProps {
  title: string
  subtitle?: string
  variant?: PageHeroVariant
}

export function PageHero({ title, subtitle, variant = 'default' }: PageHeroProps) {
  return (
    <section
      className={cn(
        'bg-bg-main',
        variant === 'default' && 'py-16 sm:py-20',
        variant === 'about' && 'py-24 sm:py-32',
        variant === 'editorial' && 'py-10 sm:py-14',
        variant === 'minimal' && 'py-8 sm:py-10'
      )}
    >
      <Container
        className={cn(
          'relative',
          variant === 'editorial' ? 'text-start' : 'text-center'
        )}
      >
        <h1
          className={cn(
            'font-extrabold text-text-primary',
            variant === 'minimal' && 'text-3xl sm:text-4xl font-bold',
            variant === 'editorial' && 'text-3xl sm:text-4xl',
            (variant === 'default' || variant === 'about') && 'text-4xl sm:text-5xl'
          )}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={cn(
              'mt-4 font-light text-text-muted',
              variant === 'minimal' && 'text-base mt-2 max-w-xl',
              variant === 'editorial' && 'text-base mt-2 max-w-xl',
              (variant === 'default' || variant === 'about') && 'text-lg max-w-2xl',
              variant !== 'editorial' && 'mx-auto'
            )}
          >
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  )
}
