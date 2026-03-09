import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import { contactInfo } from '@/data/contact'
import { PageHero } from '@/components/sections/PageHero'
import { Container } from '@/components/ui/Container'

export const metadata: Metadata = generatePageMetadata({
  title: 'הצהרת נגישות',
  description:
    'הצהרת הנגישות של מזון ייעוץ מס. אנו מחויבים להנגשת האתר לכלל האוכלוסייה, כולל אנשים עם מוגבלויות.',
  path: '/accessibility',
  keywords: ['נגישות', 'הצהרת נגישות', 'הנגשת אתר'],
})

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        title="הצהרת נגישות"
        subtitle="מזון ייעוץ מס מחויבים להנגשת האתר לכלל המשתמשים"
        variant="minimal"
      />

      <section className="bg-bg-main pb-16 sm:pb-24">
        <Container className="max-w-3xl">
          <div className="space-y-8 text-text-muted leading-relaxed">
            <div>
              <h2 className="font-display font-extrabold text-xl text-text-primary mb-3">
                מחויבות לנגישות
              </h2>
              <p>
                משרד מזון ייעוץ מס רואה חשיבות רבה במתן שירות שוויוני לכלל
                האוכלוסייה, לרבות אנשים עם מוגבלויות. אנו פועלים להנגיש את האתר
                בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות
                לשירות), התשע&quot;ג-2013, ובהתאם לתקן הישראלי ת&quot;י 5568
                ולהנחיות WCAG 2.1 ברמה AA.
              </p>
            </div>

            <div>
              <h2 className="font-display font-extrabold text-xl text-text-primary mb-3">
                תוסף הנגישות
              </h2>
              <p>
                באתר מותקן תוסף נגישות של UserWay המאפשר התאמות נגישות מגוונות,
                ביניהן:
              </p>
              <ul className="mt-3 list-disc list-inside space-y-1.5 text-text-muted/80">
                <li>התאמת גודל הטקסט</li>
                <li>שינוי ניגודיות צבעים</li>
                <li>הדגשת קישורים</li>
                <li>שינוי גופן לקריא יותר</li>
                <li>עצירת אנימציות</li>
                <li>הגדלת סמן העכבר</li>
                <li>ניווט באמצעות מקלדת</li>
              </ul>
              <p className="mt-3">
                ניתן לגשת לתוסף הנגישות באמצעות לחיצה על סמל הנגישות המופיע
                באתר.
              </p>
            </div>

            <div>
              <h2 className="font-display font-extrabold text-xl text-text-primary mb-3">
                פנייה בנושא נגישות
              </h2>
              <p>
                אם נתקלתם בבעיית נגישות באתר או שיש לכם הצעות לשיפור הנגישות,
                נשמח לשמוע מכם. ניתן לפנות אלינו באמצעים הבאים:
              </p>
              <ul className="mt-3 space-y-1.5 text-text-muted/80">
                <li>
                  טלפון:{' '}
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </li>
                <li>
                  דוא&quot;ל:{' '}
                  <a
                    href={`mailto:${contactInfo.emails[0]}`}
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    {contactInfo.emails[0]}
                  </a>
                </li>
                <li>כתובת: {contactInfo.address.full}</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-extrabold text-xl text-text-primary mb-3">
                עדכון אחרון
              </h2>
              <p>הצהרת נגישות זו עודכנה לאחרונה בתאריך מרץ 2026.</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
