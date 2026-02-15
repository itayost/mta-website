import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StaggerChildren, StaggerItem } from '@/components/ui/motion'

const steps = [
  {
    step: '01',
    title: 'פגישת היכרות',
    description: 'פגישה ראשונית ללא עלות להבנת הצרכים שלכם ולבניית תוכנית עבודה מותאמת.',
  },
  {
    step: '02',
    title: 'ליווי שוטף',
    description: 'טיפול מקצועי ושוטף בכל ענייני החשבונאות והמיסוי, עם זמינות מלאה.',
  },
  {
    step: '03',
    title: 'אופטימיזציה',
    description: 'בחינה מתמדת של הזדמנויות לחיסכון במס ושיפור התנהלות פיננסית.',
  },
]

export function ProcessSteps() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-bl from-navy-800 via-primary-deep to-navy-900">
      <Container>
        <SectionHeading
          title="איך אנחנו עובדים"
          subtitle="תהליך פשוט וברור מהפגישה הראשונה ועד הליווי השוטף"
        />
        <div className="relative max-w-4xl mx-auto">
          {/* Visual connecting line */}
          <div className="hidden sm:block absolute top-7 inset-x-[15%] h-0.5 bg-white/10" aria-hidden="true" />
          <StaggerChildren staggerDelay={0.15} className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {steps.map((item) => (
              <StaggerItem key={item.step}>
                <div className="text-center relative">
                  <span className="inline-flex size-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-bg-main mb-4 relative z-10">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-extrabold text-text-primary mb-2">{item.title}</h3>
                  <p className="text-text-muted">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </Container>
    </section>
  )
}
