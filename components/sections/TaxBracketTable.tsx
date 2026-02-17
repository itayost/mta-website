import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AnimateOnScroll } from '@/components/ui/motion'

const brackets = [
  { monthly: '0 – 7,010', annual: '0 – 84,120', rate: '10%' },
  { monthly: '7,011 – 10,060', annual: '84,121 – 120,720', rate: '14%' },
  { monthly: '10,061 – 16,150', annual: '120,721 – 193,800', rate: '20%' },
  { monthly: '16,151 – 22,440', annual: '193,801 – 269,280', rate: '31%' },
  { monthly: '22,441 – 46,690', annual: '269,281 – 560,280', rate: '35%' },
  { monthly: '46,691 – 60,130', annual: '560,281 – 721,560', rate: '47%' },
  { monthly: '60,131+', annual: '721,561+', rate: '50%*' },
]

export function TaxBracketTable() {
  return (
    <section className="py-16 sm:py-20 bg-bg-surface">
      <Container>
        <SectionHeading
          title="מדרגות מס הכנסה 2025"
          subtitle="הטבלה המעודכנת לשנת המס 2025"
        />
        <AnimateOnScroll preset="fade-in-up">
          <div className="max-w-3xl mx-auto overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-text-muted/10">
                  <th className="py-3 px-4 text-start text-text-muted font-semibold">הכנסה חודשית (₪)</th>
                  <th className="py-3 px-4 text-start text-text-muted font-semibold">הכנסה שנתית (₪)</th>
                  <th className="py-3 px-4 text-start text-text-muted font-semibold">שיעור המס</th>
                </tr>
              </thead>
              <tbody>
                {brackets.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-text-muted/5 hover:bg-bg-surface transition-colors"
                  >
                    <td className="py-3 px-4 text-text-primary font-medium" dir="ltr">{row.monthly}</td>
                    <td className="py-3 px-4 text-text-primary font-medium" dir="ltr">{row.annual}</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {row.rate}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-text-muted/50 mt-4 text-center">
              * כולל מס יסף של 3% על הכנסה מעל 721,560 ₪ לשנה
            </p>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  )
}
