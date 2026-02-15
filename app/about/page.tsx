import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PageHero } from '@/components/sections/PageHero'
import { TeamMember } from '@/components/sections/TeamMember'
import { StatsCounter } from '@/components/sections/StatsCounter'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { teamMembers } from '@/data/team'
import { generatePageMetadata, buildLocalBusinessJsonLd } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'אודות',
  description:
    'הכירו את משרד מזון – משרד רואי חשבון ויועצי מס ותיק בחיפה עם למעלה מ-40 שנות ניסיון. סמי ויוסי מזון וצוות מקצועי.',
  path: '/about',
  keywords: ['אודות משרד מזון', 'רואה חשבון ותיק חיפה'],
})

export default function AboutPage() {
  const jsonLd = buildLocalBusinessJsonLd()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title="אודות משרד מזון"
        subtitle="מעל 40 שנות מקצוענות, אמינות ושירות אישי"
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6 text-neutral-700 leading-relaxed text-lg">
            <p>
              משרד מזון הוקם בשנות ה-80 של המאה הקודמת על ידי רואה החשבון סמי מזון,
              ומאז משמש ככתובת מקצועית ואמינה לשירותי חשבונאות, ביקורת וייעוץ מס בחיפה
              והצפון.
            </p>
            <p>
              לאורך למעלה מארבעה עשורים, המשרד ליווה אלפי לקוחות – עצמאים, שכירים,
              חברות ועמותות – בכל תחומי המיסוי והחשבונאות. הניסיון הרב והידע המעמיק
              מאפשרים לנו לתת מענה מקצועי ומותאם אישית לכל לקוח.
            </p>
            <p>
              כיום המשרד מנוהל בשותפות מלאה של סמי ויוסי מזון, ומעסיק צוות מקצועי
              ומנוסה. אנו מאמינים ביחס אישי, זמינות מלאה ושקיפות מול הלקוח.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28 bg-neutral-50">
        <Container>
          <SectionHeading
            title="הצוות שלנו"
            subtitle="אנשי מקצוע מנוסים לשירותכם"
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-3xl mx-auto">
            {teamMembers.map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </Container>
      </section>

      <StatsCounter />

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            title="הגישה שלנו"
            subtitle="איך אנחנו עובדים"
          />
          <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-4xl mx-auto">
            {/* Visual connecting line */}
            <div className="hidden sm:block absolute top-7 inset-x-[15%] h-0.5 bg-primary-100" aria-hidden="true" />

            {[
              {
                step: '01',
                title: 'פגישת היכרות',
                desc: 'פגישה ראשונית ללא עלות להבנת הצרכים שלכם ולבניית תוכנית עבודה מותאמת.',
              },
              {
                step: '02',
                title: 'ליווי שוטף',
                desc: 'טיפול מקצועי ושוטף בכל ענייני החשבונאות והמיסוי, עם זמינות מלאה.',
              },
              {
                step: '03',
                title: 'אופטימיזציה',
                desc: 'בחינה מתמדת של הזדמנויות לחיסכון במס ושיפור התנהלות פיננסית.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center relative">
                <span className="inline-flex size-14 items-center justify-center rounded-full bg-primary-600 text-xl font-bold text-white mb-4 relative z-10">
                  {item.step}
                </span>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  )
}
