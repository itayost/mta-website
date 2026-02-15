import { Container } from '@/components/ui/Container'

const stats = [
  { value: '40+', label: 'שנות ניסיון' },
  { value: '1,000+', label: 'לקוחות מרוצים' },
  { value: '17', label: 'שירותים מקצועיים' },
  { value: '100%', label: 'מחויבות ללקוח' },
]

export function StatsCounter() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-bl from-primary-800 via-primary-700 to-primary-900">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${i < stats.length - 1 ? 'lg:border-e lg:border-white/20' : ''}`}
            >
              <p className="text-5xl font-black text-white lg:text-6xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-primary-100 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
