import { Send, PhoneCall, Handshake } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StaggerChildren, StaggerItem } from '@/components/ui/motion'

const steps = [
  {
    icon: Send,
    title: 'משאירים פרטים',
    description: 'ממלאים את הטופס עם שם, טלפון, והנושא שמעניין אתכם.',
    time: 'דקה אחת',
  },
  {
    icon: PhoneCall,
    title: 'מקבלים שיחה',
    description: 'אחד מצוות המשרד חוזר אליכם לשיחה קצרה להבנת הצרכים.',
    time: 'תוך שעתיים',
  },
  {
    icon: Handshake,
    title: 'פגישת ייעוץ חינם',
    description: 'נפגשים למשרד או בזום לפגישת ייעוץ ראשונית ללא עלות.',
    time: 'בתיאום',
  },
]

export function ContactResponseTimeline() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-bl from-navy-800 via-primary-deep to-navy-900">
      <Container>
        <SectionHeading
          title="מה קורה אחרי שפונים?"
          subtitle="תהליך פשוט מהפנייה ועד הפגישה"
        />
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="hidden sm:block absolute top-7 inset-x-[15%] h-0.5 bg-white/10" aria-hidden="true" />
          <StaggerChildren staggerDelay={0.15} className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {steps.map((step, i) => (
              <StaggerItem key={step.title}>
                <div className="text-center relative">
                  <div className="inline-flex size-14 items-center justify-center rounded-full bg-primary text-bg-main mb-4 relative z-10">
                    <step.icon className="size-6" />
                  </div>
                  <h3 className="text-lg font-extrabold text-text-primary mb-1">{step.title}</h3>
                  <span className="inline-block text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1 mb-2">
                    {step.time}
                  </span>
                  <p className="text-text-muted text-sm">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </Container>
    </section>
  )
}
