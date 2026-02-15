import { Container } from '@/components/ui/Container'

interface PageHeroProps {
  title: string
  subtitle?: string
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-bl from-primary-900 via-primary-800 to-primary-950 py-16 sm:py-20">
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <Container className="relative text-center">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 font-light text-lg text-primary-100 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  )
}
