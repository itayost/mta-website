import type { LucideIcon } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StaggerChildren, StaggerItem } from '@/components/ui/motion'

interface Step {
  label: string
  icon?: LucideIcon
  title: string
  description: string
  badge?: string
}

interface StepsSectionProps {
  title: string
  subtitle: string
  steps: Step[]
  sectionClassName?: string
}

export function StepsSection({
  title,
  subtitle,
  steps,
  sectionClassName = 'py-16 sm:py-24 bg-bg-surface',
}: StepsSectionProps) {
  return (
    <section className={sectionClassName}>
      <Container>
        <SectionHeading title={title} subtitle={subtitle} />
        <div className="relative max-w-4xl mx-auto">
          <div className="hidden sm:block absolute top-7 inset-x-[15%] h-0.5 bg-text-muted/10" aria-hidden="true" />
          <StaggerChildren staggerDelay={0.15} className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {steps.map((step) => (
              <StaggerItem key={step.title}>
                <div className="text-center relative">
                  {step.icon ? (
                    <div className="inline-flex size-14 items-center justify-center rounded-full bg-primary text-bg-main mb-4 relative z-10">
                      <step.icon className="size-6" />
                    </div>
                  ) : (
                    <span className="inline-flex size-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-white mb-4 relative z-10">
                      {step.label}
                    </span>
                  )}
                  <h3 className="text-lg font-extrabold text-text-primary mb-2">{step.title}</h3>
                  {step.badge && (
                    <span className="inline-block text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1 mb-2">
                      {step.badge}
                    </span>
                  )}
                  <p className="text-text-muted">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </Container>
    </section>
  )
}
