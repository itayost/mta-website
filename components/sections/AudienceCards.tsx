import Link from 'next/link'
import { Briefcase, UserCheck, Building2, ArrowLeft } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { StaggerChildren, StaggerItem } from '@/components/ui/motion'

const audiences = [
  {
    icon: Briefcase,
    title: 'עצמאים',
    description: 'הנהלת חשבונות, דוחות שנתיים, תכנון מס ופתיחת תיקים — ליווי מלא לעסק שלכם.',
    href: '/services?audience=freelancers',
    linkText: 'לשירותים לעצמאים',
  },
  {
    icon: UserCheck,
    title: 'שכירים',
    description: 'החזרי מס, ייעוץ מס אישי, תכנון פנסיוני ומיסוי מקרקעין — מקסום הזכויות שלכם.',
    href: '/services?audience=employees',
    linkText: 'לשירותים לשכירים',
  },
  {
    icon: Building2,
    title: 'חברות ועמותות',
    description: 'ביקורת חשבונות, שכר, ייעוץ עסקי, הקמת חברות ומיסוי בינלאומי — הכל תחת קורת גג אחת.',
    href: '/services?audience=companies',
    linkText: 'לשירותים לחברות',
  },
]

export function AudienceCards() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="למי אנחנו משרתים?"
          subtitle="פתרונות מותאמים לכל סוג לקוח"
        />
        <StaggerChildren className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {audiences.map((audience) => (
            <StaggerItem key={audience.title}>
              <Card className="group h-full flex flex-col">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-5 transition-transform duration-300 group-hover:scale-110">
                  <audience.icon className="size-7" />
                </div>
                <h3 className="text-xl font-extrabold text-text-primary mb-2">
                  {audience.title}
                </h3>
                <p className="text-text-muted leading-relaxed text-sm flex-1">
                  {audience.description}
                </p>
                <Link
                  href={audience.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  <span>{audience.linkText}</span>
                  <ArrowLeft className="size-4" />
                </Link>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  )
}
