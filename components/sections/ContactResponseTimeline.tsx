import { Send, PhoneCall, Handshake } from 'lucide-react'
import { StepsSection } from './StepsSection'

const steps = [
  {
    label: '',
    icon: Send,
    title: 'משאירים פרטים',
    description: 'ממלאים את הטופס עם שם, טלפון, והנושא שמעניין אתכם.',
    badge: 'דקה אחת',
  },
  {
    label: '',
    icon: PhoneCall,
    title: 'מקבלים שיחה',
    description: 'אחד מצוות המשרד חוזר אליכם לשיחה קצרה להבנת הצרכים.',
    badge: 'תוך שעתיים',
  },
  {
    label: '',
    icon: Handshake,
    title: 'פגישת ייעוץ חינם',
    description: 'נפגשים למשרד או בזום לפגישת ייעוץ ראשונית ללא עלות.',
    badge: 'בתיאום',
  },
]

export function ContactResponseTimeline() {
  return (
    <StepsSection
      title="מה קורה אחרי שפונים?"
      subtitle="תהליך פשוט מהפנייה ועד הפגישה"
      steps={steps}
      sectionClassName="py-16 sm:py-20 bg-bg-surface"
    />
  )
}
