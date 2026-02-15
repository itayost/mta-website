import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/Container'
import { Parallax } from '@/components/ui/motion/Parallax'

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
        'relative overflow-hidden bg-gradient-to-bl from-navy-900 via-navy-800 to-navy-950',
        variant === 'default' && 'py-16 sm:py-20',
        variant === 'about' && 'py-24 sm:py-32',
        variant === 'editorial' && 'py-10 sm:py-14',
        variant === 'minimal' && 'py-8 sm:py-10'
      )}
    >
      {/* Dot pattern overlay with parallax — not on minimal */}
      {variant !== 'minimal' && (
        <Parallax offset={20} className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
        </Parallax>
      )}

      {/* About variant: "1980" watermark + warm amber blur */}
      {variant === 'about' && (
        <>
          <div
            className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
            aria-hidden="true"
          >
            <span className="text-[20rem] sm:text-[28rem] font-black text-white/[0.03] leading-none">
              1980
            </span>
          </div>
          <div
            className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 size-96 rounded-full bg-amber-500/8 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
        </>
      )}

      <Container
        className={cn(
          'relative',
          variant === 'editorial' ? 'text-start' : 'text-center'
        )}
      >
        <h1
          className={cn(
            'font-extrabold text-white',
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
