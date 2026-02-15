import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PageHero } from '@/components/sections/PageHero'
import { TeamMember } from '@/components/sections/TeamMember'
import { StatsCounter } from '@/components/sections/StatsCounter'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { PageTransition, AnimateOnScroll, StaggerChildren, StaggerItem } from '@/components/ui/motion'
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

  const processSteps = [
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
  ]

  return (
    <PageTransition>
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
          <div className="max-w-3xl mx-auto space-y-6 text-text-muted leading-relaxed text-lg">
            <AnimateOnScroll preset="fade-in-up">
              <p>
                משרד מזון הוקם בשנות ה-80 של המאה הקודמת על ידי רואה החשבון סמי מזון,
                ומאז משמש ככתובת מקצועית ואמינה לשירותי חשבונאות, ביקורת וייעוץ מס בחיפה
                והצפון.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll preset="fade-in-up" delay={0.1}>
              <p>
                לאורך למעלה מארבעה עשורים, המשרד ליווה אלפי לקוחות – עצמאים, שכירים,
                חברות ועמותות – בכל תחומי המיסוי והחשבונאות. הניסיון הרב והידע המעמיק
                מאפשרים לנו לתת מענה מקצועי ומותאם אישית לכל לקוח.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll preset="fade-in-up" delay={0.2}>
              <p>
                כיום המשרד מנוהל בשותפות מלאה של סמי ויוסי מזון, ומעסיק צוות מקצועי
                ומנוסה. אנו מאמינים ביחס אישי, זמינות מלאה ושקיפות מול הלקוח.
              </p>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28 bg-bg-surface">
        <Container>
          <SectionHeading
            title="הצוות שלנו"
            subtitle="אנשי מקצוע מנוסים לשירותכם"
          />
          <StaggerChildren className="grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-3xl mx-auto">
            {teamMembers.map((member) => (
              <StaggerItem key={member.id}>
                <TeamMember member={member} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      <StatsCounter />

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            title="הגישה שלנו"
            subtitle="איך אנחנו עובדים"
          />
          <div className="relative max-w-4xl mx-auto">
            {/* Visual connecting line */}
            <div className="hidden sm:block absolute top-7 inset-x-[15%] h-0.5 bg-white/10" aria-hidden="true" />
            <StaggerChildren staggerDelay={0.15} className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {processSteps.map((item) => (
                <StaggerItem key={item.step}>
                  <div className="text-center relative">
                    <span className="inline-flex size-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-bg-main mb-4 relative z-10">
                      {item.step}
                    </span>
                    <h3 className="text-lg font-extrabold text-text-primary mb-2">{item.title}</h3>
                    <p className="text-text-muted">{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </PageTransition>
  )
}
