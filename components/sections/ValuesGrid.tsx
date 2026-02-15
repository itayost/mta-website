import { Target, MessageCircle, Users, Lightbulb } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StaggerChildren, StaggerItem } from '@/components/ui/motion'

const values = [
  {
    icon: Target,
    title: 'דיוק',
    description: 'מדויקים עד לשקל האחרון. כל דוח, כל חישוב, כל דיווח — ללא פשרות.',
  },
  {
    icon: MessageCircle,
    title: 'נגישות',
    description: 'מסבירים חוקי מס מורכבים בעברית פשוטה. שקיפות מלאה בכל שלב.',
  },
  {
    icon: Users,
    title: 'יחס אישי',
    description: 'תמיד תדברו עם אותו רואה חשבון. אנחנו מכירים כל לקוח בשם.',
  },
  {
    icon: Lightbulb,
    title: 'יוזמה',
    description: 'מזהים בעיות לפני שהן קורות ומוצאים הזדמנויות חיסכון יזומות.',
  },
]

export function ValuesGrid() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="הערכים שלנו"
          subtitle="העקרונות שמנחים אותנו בכל יום"
        />
        <StaggerChildren className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          {values.map((value) => (
            <StaggerItem key={value.title}>
              <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-6 text-center">
                <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-gold/10">
                  <value.icon className="size-7 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  )
}
