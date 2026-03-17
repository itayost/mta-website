import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AnimateOnScroll } from '@/components/ui/motion/AnimateOnScroll'

const values = [
  {
    title: 'שותפות לדרך',
    description:
      'אנחנו רואים את עצמנו כחלק מהמערך התומך של העסק שלכם, זמינים לייעוץ וקשובים לצרכים המשתנים שלכם.',
  },
  {
    title: 'שקיפות ובהירות',
    description:
      'המטרה שלנו היא לפשט עבורכם את המורכבות הבירוקרטית, כדי שתוכלו להתמקד במה שאתם עושים הכי טוב: ניהול העסק שלכם.',
  },
  {
    title: 'גב מקצועי איתן',
    description:
      'הניסיון המצטבר של הצוות שלנו, שחלקו צועד יחד עשרות שנים, הוא הביטחון שלכם שאתם נמצאים בידיים המנוסות ביותר בשוק.',
  },
]

export function ValuesSection() {
  return (
    <section className="bg-bg-surface py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="התפיסה המקצועית שלנו"
          subtitle="אנו מבינים שמאחורי כל דוח וכל מספר עומד אדם, משפחה או עסק שהשקיעו מאמץ רב ביצירת הכנסתם. לכן, הגישה שלנו אינה טכנית בלבד:"
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {values.map((value) => (
            <AnimateOnScroll key={value.title} preset="fade-in-up">
              <div className="bg-bg-card rounded-2xl p-6">
                <h3 className="text-xl font-bold text-text-primary">
                  {value.title}
                </h3>
                <p className="mt-3 text-base font-light leading-relaxed text-text-muted">
                  {value.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  )
}
