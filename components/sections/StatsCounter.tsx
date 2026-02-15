import { Container } from '@/components/ui/Container'
import { AnimatedCounter } from '@/components/ui/motion/AnimatedCounter'
import { StaggerChildren, StaggerItem } from '@/components/ui/motion'

const stats = [
  { target: 40, suffix: '+', label: 'שנות ניסיון' },
  { target: 1000, suffix: '+', label: 'לקוחות מרוצים' },
  { target: 17, suffix: '', label: 'שירותים מקצועיים' },
  { target: 100, suffix: '%', label: 'מחויבות ללקוח' },
]

export function StatsCounter() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-bl from-navy-800 via-primary-deep to-navy-900">
      <Container>
        <StaggerChildren staggerDelay={0.15} className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StaggerItem key={stat.label}>
              <div
                className={`text-center ${i < stats.length - 1 ? 'lg:border-e lg:border-white/20' : ''}`}
              >
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  className="text-5xl font-black text-white lg:text-6xl"
                />
                <p className="mt-2 text-sm text-text-muted font-medium">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  )
}
