import { Container } from '@/components/ui/Container'
import { Parallax } from '@/components/ui/motion/Parallax'

interface PageHeroProps {
  title: string
  subtitle?: string
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-bl from-navy-900 via-navy-800 to-navy-950 py-16 sm:py-20">
      {/* Dot pattern overlay with parallax */}
      <Parallax offset={20} className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </Parallax>

      <Container className="relative text-center">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 font-light text-lg text-text-muted max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  )
}
