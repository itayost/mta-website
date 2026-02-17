import { MessageCircle } from 'lucide-react'
import { CtaSection } from './CtaSection'

export function FaqCta() {
  return (
    <CtaSection
      icon={MessageCircle}
      title="לא מצאתם תשובה?"
      body="צוות המשרד ישמח לענות על כל שאלה. פנו אלינו ונחזור אליכם תוך שעתיים."
      primaryLabel="השאירו פרטים"
      headingClassName="text-2xl sm:text-3xl"
      sectionClassName="py-16 sm:py-20"
    />
  )
}
