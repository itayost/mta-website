import { Container } from '@/components/ui/Container'

const logos = [
  { name: 'לשכת רואי חשבון', text: 'לשכת רואי חשבון' },
  { name: 'רשות המסים', text: 'רשות המסים' },
  { name: 'ביטוח לאומי', text: 'ביטוח לאומי' },
  { name: 'משרד האוצר', text: 'משרד האוצר' },
  { name: 'בנק ישראל', text: 'בנק ישראל' },
  { name: 'רשם החברות', text: 'רשם החברות' },
]

export function LogoCarousel() {
  return (
    <section className="bg-bg-dark py-10 sm:py-12">
      <Container>
        <p className="text-center text-sm font-medium text-white/50 mb-8">
          עובדים עם הגופים המובילים
        </p>
        <div className="relative overflow-hidden" dir="ltr">
          <div className="absolute inset-y-0 start-0 w-24 bg-gradient-to-l from-transparent to-bg-dark z-10" />
          <div className="absolute inset-y-0 end-0 w-24 bg-gradient-to-r from-transparent to-bg-dark z-10" />
          <InfiniteScroll />
        </div>
      </Container>
    </section>
  )
}

function InfiniteScroll() {
  return (
    <div className="flex gap-12 animate-marquee">
      {[...logos, ...logos].map((logo, i) => (
        <div
          key={`${logo.name}-${i}`}
          className="flex shrink-0 items-center justify-center px-6 py-3"
        >
          <span className="text-lg font-semibold text-white/30 whitespace-nowrap hover:text-white/60 transition-colors">
            {logo.text}
          </span>
        </div>
      ))}
    </div>
  )
}
