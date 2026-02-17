'use client'

import { BookOpen, Calculator, ClipboardCheck, TrendingUp, Users, FileText } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { AnimateOnScroll } from '@/components/ui/motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Calculator,
  ClipboardCheck,
  TrendingUp,
  Users,
  FileText,
}

const bentoItems = [
  {
    title: 'הנהלת חשבונות',
    description: 'ניהול ספרים מקצועי ומדויק לעסקים בכל הגדלים, כולל דיווחים שוטפים למע"מ, ביטוח לאומי ומס הכנסה.',
    icon: 'BookOpen',
    className: 'md:col-span-2',
    stat: '1,000+',
    statLabel: 'לקוחות פעילים',
  },
  {
    title: 'ייעוץ מס',
    description: 'תכנון מס אופטימלי והפחתת נטל המס באופן חוקי. ליווי בהחלטות פיננסיות משמעותיות.',
    icon: 'Calculator',
    className: 'md:row-span-2',
    stat: '₪340K',
    statLabel: 'חיסכון ממוצע ללקוח',
  },
  {
    title: 'ביקורת חשבונות',
    description: 'ביקורת דוחות כספיים בהתאם לתקנים המקצועיים, לרבות חוות דעת רואה חשבון מבקר.',
    icon: 'ClipboardCheck',
    className: '',
  },
  {
    title: 'ייעוץ עסקי',
    description: 'ליווי בהקמת עסק, בחירת מבנה משפטי, תכנון פיננסי ואסטרטגיה עסקית.',
    icon: 'TrendingUp',
    className: '',
  },
]

export function BentoGrid() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="השירותים שלנו"
          subtitle="מגוון שירותים מקצועיים לעצמאים, שכירים וחברות"
          id="services-heading"
        />

        <div
          className="grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[18rem]"
          aria-labelledby="services-heading"
        >
          {bentoItems.map((item, i) => {
            const Icon = iconMap[item.icon]
            return (
              <AnimateOnScroll key={item.title} preset="fade-in-up" delay={i * 0.1}>
                <div
                  className={cn(
                    'group relative overflow-hidden rounded-2xl bg-bg-card p-8 transition-all duration-300 hover:bg-primary/[0.03] h-full',
                    item.className
                  )}
                >
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-text-primary">{item.title}</h3>
                      <p className="mt-2 text-text-muted leading-relaxed">{item.description}</p>
                    </div>
                    {item.stat && (
                      <div className="mt-6 pt-4 border-t border-text-muted/10">
                        <p className="text-3xl font-black text-primary">{item.stat}</p>
                        <p className="text-sm text-text-muted">{item.statLabel}</p>
                      </div>
                    )}
                  </div>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
