import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import { contactInfo } from '@/data/contact'
import { PageHero } from '@/components/sections/PageHero'
import { Container } from '@/components/ui/Container'

export const metadata: Metadata = generatePageMetadata({
  title: 'מדיניות פרטיות',
  description:
    'מדיניות הפרטיות של מזון ייעוץ מס. מידע על איסוף, שימוש ושמירה של מידע אישי באתר.',
  path: '/privacy',
  keywords: ['מדיניות פרטיות', 'הגנת פרטיות', 'מידע אישי'],
})

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="מדיניות פרטיות"
        subtitle="כיצד אנו אוספים, משתמשים ומגנים על המידע שלכם"
        variant="minimal"
      />

      <section className="bg-bg-main pb-16 sm:pb-24">
        <Container className="max-w-3xl">
          <div className="space-y-8 text-text-muted leading-relaxed">
            <div>
              <h2 className="font-display font-extrabold text-xl text-text-primary mb-3">
                כללי
              </h2>
              <p>
                מזון ייעוץ מס (&quot;המשרד&quot;) מכבד את פרטיות המבקרים באתר.
                מדיניות פרטיות זו מפרטת כיצד אנו אוספים, משתמשים ומגנים על
                מידע אישי שנמסר לנו דרך האתר.
              </p>
            </div>

            <div>
              <h2 className="font-display font-extrabold text-xl text-text-primary mb-3">
                מידע שאנו אוספים
              </h2>
              <p>
                אנו אוספים מידע אישי רק כאשר אתם מוסרים אותו לנו מרצונכם,
                באמצעות טופס יצירת הקשר באתר. המידע עשוי לכלול:
              </p>
              <ul className="mt-3 list-disc list-inside space-y-1.5 text-text-muted/80">
                <li>שם מלא</li>
                <li>מספר טלפון</li>
                <li>כתובת דוא&quot;ל</li>
                <li>תוכן ההודעה שנשלחה</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-extrabold text-xl text-text-primary mb-3">
                שימוש במידע
              </h2>
              <p>
                המידע שנאסף משמש אך ורק למטרת יצירת קשר חוזר עמכם בנוגע
                לפנייתכם. איננו מוכרים, משכירים או מעבירים את המידע האישי שלכם
                לצדדים שלישיים, למעט במקרים הנדרשים על פי חוק.
              </p>
            </div>

            <div>
              <h2 className="font-display font-extrabold text-xl text-text-primary mb-3">
                עוגיות (Cookies)
              </h2>
              <p>
                האתר עשוי להשתמש בעוגיות לצורך שיפור חוויית הגלישה ולצרכים
                סטטיסטיים. עוגיות הן קבצים קטנים הנשמרים במכשיר שלכם. ניתן
                להגדיר את הדפדפן לסירוב עוגיות, אולם חלק מתכונות האתר עשויות
                שלא לפעול כראוי.
              </p>
            </div>

            <div>
              <h2 className="font-display font-extrabold text-xl text-text-primary mb-3">
                שירותי צד שלישי
              </h2>
              <p>
                האתר משתמש בשירותים חיצוניים לצורך תפקוד תקין, כגון תוסף
                הנגישות של UserWay. שירותים אלו עשויים לאסוף מידע בהתאם
                למדיניות הפרטיות שלהם.
              </p>
            </div>

            <div>
              <h2 className="font-display font-extrabold text-xl text-text-primary mb-3">
                אבטחת מידע
              </h2>
              <p>
                אנו נוקטים באמצעי אבטחה סבירים כדי להגן על המידע האישי שלכם
                מפני גישה בלתי מורשית, שימוש לרעה או חשיפה. יחד עם זאת, אין
                אפשרות להבטיח אבטחה מוחלטת של מידע המועבר דרך האינטרנט.
              </p>
            </div>

            <div>
              <h2 className="font-display font-extrabold text-xl text-text-primary mb-3">
                זכויותיכם
              </h2>
              <p>
                בהתאם לחוק הגנת הפרטיות, התשמ&quot;א-1981, עומדת לכם הזכות
                לעיין במידע שנאסף אודותיכם, לבקש את תיקונו או את מחיקתו. לצורך
                כך, ניתן לפנות אלינו באמצעי הקשר המפורטים להלן.
              </p>
            </div>

            <div>
              <h2 className="font-display font-extrabold text-xl text-text-primary mb-3">
                יצירת קשר
              </h2>
              <p>
                לשאלות בנוגע למדיניות הפרטיות שלנו, ניתן לפנות אלינו:
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
                עדכון המדיניות
              </h2>
              <p>
                מדיניות פרטיות זו עשויה להתעדכן מעת לעת. השינויים ייכנסו לתוקף
                עם פרסומם באתר. עדכון אחרון: מרץ 2026.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
