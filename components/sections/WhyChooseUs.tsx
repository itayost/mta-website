import { Clock, Heart, Gift } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AnimateOnScroll, StaggerChildren, StaggerItem } from '@/components/ui/motion'

const pillars = [
  {
    icon: Clock,
    title: 'ניסיון מעל 40 שנה',
    description: 'ידע מצטבר של עשורים בכל תחומי המיסוי והחשבונאות. ליוינו אלפי לקוחות בהצלחה.',
  },
  {
    icon: Heart,
    title: 'יחס אישי ומותאם',
    description: 'כל לקוח מקבל את תשומת הלב המלאה שמגיעה לו. זמינות, שקיפות ומחויבות.',
  },
  {
    icon: Gift,
    title: 'פגישה ראשונית חינם',
    description: 'הכירו אותנו ללא התחייבות. ניפגש, נבין את הצרכים שלכם ונבנה תוכנית מותאמת.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 bg-bg-surface">
      <Container>
        <AnimateOnScroll preset="fade-in-up">
          <SectionHeading
            title="למה משרד מזון?"
            subtitle="שלושה דברים שמבדלים אותנו"
          />
        </AnimateOnScroll>
        <StaggerChildren className="grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-4xl mx-auto">
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <div className="text-center">
                <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-2xl bg-primary/10">
                  <pillar.icon className="size-8 text-primary" />
                </div>
                <h3 className="text-lg font-extrabold text-text-primary mb-2">
                  {pillar.title}
                </h3>
                <p className="text-text-muted leading-relaxed text-sm">
                  {pillar.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  )
}
