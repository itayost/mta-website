import type { Metadata } from 'next'
import { TeamScrollStory } from '@/components/sections/TeamScrollStory'
import { TeamMember } from '@/components/sections/TeamMember'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { AboutCta } from '@/components/sections/AboutCta'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RoundedTransition, RoundedTransitionUp } from '@/components/ui/RoundedTransition'
import { StaggerChildren, StaggerItem } from '@/components/ui/motion'
import { teamMembers } from '@/data/team'
import { generatePageMetadata, buildLocalBusinessJsonLd } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'אודות',
  description:
    'הכירו את מזון ייעוץ מס – משרד יועצי מס מוסמכים ותיק בחיפה עם למעלה מ-50 שנות ניסיון. סמי ויוסי מזון וצוות מקצועי.',
  path: '/about',
  keywords: ['אודות מזון ייעוץ מס', 'יועץ מס מוסמך ותיק חיפה'],
})

export default function AboutPage() {
  const jsonLd = buildLocalBusinessJsonLd()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <TeamScrollStory />

      {/* Team grid - all members */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            title="הכירו את הצוות"
            subtitle="אנשי המקצוע שעומדים מאחורי כל שירות"
          />
          <StaggerChildren staggerDelay={0.1} className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <StaggerItem key={member.id}>
                <TeamMember member={member} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      <RoundedTransition from="bg-bg-main" to="bg-bg-surface" />

      <ProcessSteps />

      {/* Transition → main */}
      <RoundedTransitionUp from="bg-bg-surface" to="bg-bg-main" />

      {/* bg-bg-main */}
      <AboutCta />
    </>
  )
}
