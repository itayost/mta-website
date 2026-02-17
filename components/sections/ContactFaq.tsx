import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { FaqSection } from './FaqSection'

const contactFaqItems = [
  {
    question: 'האם הפגישה הראשונה באמת חינם?',
    answer: 'כן, לחלוטין. פגישת ההיכרות הראשונה היא ללא עלות וללא התחייבות. אנחנו מאמינים שצריך להכיר לפני שמתחילים לעבוד יחד.',
  },
  {
    question: 'כמה מהר תחזרו אליי?',
    answer: 'אנחנו מתחייבים לחזור אליכם תוך שעתיים בשעות הפעילות (ראשון–חמישי 08:30–17:00). פניות שמגיעות מחוץ לשעות אלו מטופלות ביום העסקים הבא.',
  },
  {
    question: 'האם צריך להביא מסמכים לפגישה?',
    answer: 'לא חובה. בפגישה הראשונה אנחנו בעיקר מקשיבים ומבינים את הצרכים שלכם. אם תרצו, אפשר להביא דוח שנתי אחרון או תלושי שכר — אבל זה לא תנאי.',
  },
  {
    question: 'אפשר לקיים את הפגישה בזום?',
    answer: 'בוודאי. אנחנו מציעים פגישות פרונטליות במשרד בחיפה וגם פגישות וידאו בזום — מה שנוח לכם.',
  },
]

export function ContactFaq() {
  return (
    <FaqSection
      title="שאלות נפוצות לפני פנייה"
      subtitle="הנה כמה תשובות שאולי יעזרו"
      items={contactFaqItems}
      sectionClassName="py-16 sm:py-20 bg-bg-surface"
      footer={
        <p className="text-center mt-6">
          <Link
            href="/faq"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
          >
            <span>לכל השאלות הנפוצות</span>
            <ArrowLeft className="size-4" />
          </Link>
        </p>
      }
    />
  )
}
