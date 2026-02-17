import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PageHero } from '@/components/sections/PageHero'
import { LogoCarousel } from '@/components/sections/LogoCarousel'
import { StatsCounter } from '@/components/sections/StatsCounter'
import { ValuesGrid } from '@/components/sections/ValuesGrid'
import { TeamMember } from '@/components/sections/TeamMember'
import { AboutTestimonial } from '@/components/sections/AboutTestimonial'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { AboutCta } from '@/components/sections/AboutCta'
import { RoundedTransition, RoundedTransitionUp } from '@/components/ui/RoundedTransition'
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
    year: '1995',
    title: 'התרחבות תחומי המיסוי',
    description: 'המשרד מוסיף שירותי מיסוי מקרקעין, מיסוי בינלאומי וייעוץ עסקי לצד שירותי הליבה.',
  },
  {
    year: '2005',
    title: 'יוסי מזון מצטרף כשותף',
    description: 'עם הצטרפותו של יוסי מזון כשותף, המשרד מתרחב ל-17 שירותים מקצועיים ומגוון את קהל הלקוחות.',
  },
  {
    year: '2015',
    title: 'מעל 500 לקוחות פעילים',
    description: 'המשרד חוצה את רף 500 הלקוחות הפעילים ומטמיע מערכות דיגיטליות לשירות מהיר ומדויק יותר.',
  },
  {
    year: '2024',
    title: 'מעל 1,000 לקוחות מרוצים',
    description: '17 שירותים מקצועיים, צוות מנוסה ומסור, ומעל ארבעה עשורים של מצוינות בתחום.',
  },
]

export default function AboutPage() {
  const jsonLd = buildLocalBusinessJsonLd()

  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title="אודות משרד מזון"
        subtitle="מעל 40 שנה של ליווי לקוחות לתוצאות פיננסיות טובות יותר"
        variant="about"
      />

      <RoundedTransition from="bg-bg-main" to="bg-bg-surface" />

      <LogoCarousel />

      <StatsCounter />

      <RoundedTransitionUp from="bg-bg-surface" to="bg-bg-main" />

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
              className="absolute start-6 sm:start-1/2 top-0 bottom-0 w-0.5 bg-text-muted/10 -translate-x-1/2"
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

      <ValuesGrid />

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

      <AboutTestimonial />

      <ProcessSteps />

      <AboutCta />
    </PageTransition>
  )
}
