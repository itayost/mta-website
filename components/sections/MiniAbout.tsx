import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { AnimateOnScroll, StaggerChildren, StaggerItem } from '@/components/ui/motion'
import { AnimatedCounter } from '@/components/ui/motion/AnimatedCounter'
import { teamMembers } from '@/data/team'

const stats = [
  { target: 57, suffix: '+', label: 'שנות ניסיון' },
  { target: 1000, suffix: '+', label: 'לקוחות מרוצים' },
  { target: 100, suffix: '%', label: 'מחויבות' },
]

export function MiniAbout() {
  return (
    <section className="py-16 sm:py-24 bg-bg-surface">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text column */}
          <AnimateOnScroll preset="fade-in-up">
            <div className="text-center lg:text-start">
              {/* Accent bar */}
              <div className="w-8 h-0.5 bg-primary mb-5 mx-auto lg:mx-0" />
              <h2 className="text-3xl font-extrabold tracking-tight leading-tight text-text-primary sm:text-4xl mb-6">
                המומחיות שלנו, השקט הנפשי שלך.
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-lg font-light leading-relaxed text-text-muted">
                  עם מעל 57 שנות פעילות, מזון ייעוץ מס הוא הרבה יותר ממשרד ייעוץ מס.
                </p>
                <p className="text-lg font-light leading-relaxed text-text-muted">
                  בהובלת מר שמואל (סמי) מזון, נשיא ארצי של לשכות יועצי המס לשעבר, ומר יוסף מזון, חבר הנהלה מחוז הצפון לשכת יועצי המס – אנחנו מביאים את הסטנדרט המקצועי הגבוה ביותר בישראל ישירות לעסק שלך.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-all"
                >
                  <span>הכירו את הצוות שלנו</span>
                  <ArrowLeft className="size-5" />
                </Link>
                <div className="flex -space-x-2 rtl:space-x-reverse">
                  {teamMembers.map((member) => (
                    member.image && (
                      <Image
                        key={member.id}
                        src={member.image}
                        alt={member.name}
                        width={40}
                        height={40}
                        className="size-10 rounded-full object-cover ring-2 ring-bg-surface"
                      />
                    )
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Stats column */}
          <StaggerChildren staggerDelay={0.1} className="grid grid-cols-3 gap-3 sm:gap-6">
            {stats.map(({ target, suffix, label }) => (
              <StaggerItem key={label}>
                <div className="bg-bg-card rounded-2xl p-4 sm:p-8 text-center">
                  <AnimatedCounter
                    target={target}
                    suffix={suffix}
                    className="text-3xl sm:text-5xl font-black tracking-tight leading-none text-text-primary"
                  />
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-text-muted">{label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </Container>
    </section>
  )
}
