import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PageHero } from '@/components/sections/PageHero'
import { TeamMember } from '@/components/sections/TeamMember'
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

const timelineItems = [
  {
    year: '1980',
    title: 'המשרד נוסד בחיפה',
    description: 'רו"ח סמי מזון מקים את המשרד ומתחיל לשרת לקוחות פרטיים ועסקיים באזור חיפה והצפון.',
  },
  {
    year: '2000+',
    title: 'יוסי מזון מצטרף כשותף',
    description: 'עם הצטרפותו של יוסי מזון כשותף, המשרד מתרחב ומגוון את השירותים המקצועיים שלו.',
  },
  {
    year: '2024',
    title: 'מעל 1,000 לקוחות מרוצים',
    description: '17 שירותים מקצועיים, צוות מנוסה ומסור, ומעל ארבעה עשורים של מצוינות בתחום.',
  },
]

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
        variant="about"
      />

      {/* Timeline Story */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            title="הסיפור שלנו"
            subtitle="למעלה מארבעה עשורים של מקצוענות"
          />
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div
              className="absolute start-6 sm:start-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2"
              aria-hidden="true"
            />

            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <AnimateOnScroll key={item.year} preset="fade-in-up" delay={index * 0.15}>
                  <div className="relative grid grid-cols-[3rem_1fr] sm:grid-cols-2 gap-6 sm:gap-12 items-start">
                    {/* Year marker */}
                    <div
                      className={`sm:text-end ${index % 2 === 0 ? 'sm:order-1' : 'sm:order-2 sm:text-start'}`}
                    >
                      <span className="hidden sm:inline-block text-3xl font-black text-primary">
                        {item.year}
                      </span>
                    </div>

                    {/* Content */}
                    <div className={index % 2 === 0 ? 'sm:order-2' : 'sm:order-1 sm:text-end'}>
                      <span className="sm:hidden text-lg font-black text-primary">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-extrabold text-text-primary mt-1 sm:mt-0">
                        {item.title}
                      </h3>
                      <p className="text-text-muted mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Dot on the line */}
                    <div
                      className="absolute start-6 sm:start-1/2 top-1 -translate-x-1/2 size-3 rounded-full bg-primary ring-4 ring-bg-main"
                      aria-hidden="true"
                    />
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
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
