import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { services } from '@/data/services'
import { generatePageMetadata } from '@/lib/seo'
import { PageHero } from '@/components/sections/PageHero'
import { Container } from '@/components/ui/Container'
import { MidPageCta } from '@/components/sections/MidPageCta'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }))
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.id === slug)
  if (!service) return {}
  return generatePageMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.id}`,
    keywords: [service.title, 'מזון ייעוץ מס'],
  })
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = services.find((s) => s.id === slug)
  if (!service) notFound()

  return (
    <>
      <PageHero title={service.title} subtitle={service.description} />

      <section className="pb-16 sm:pb-24">
        <Container className="max-w-3xl">
          <div className="space-y-10">
            {service.longDescription && (
              <p className="text-lg font-light leading-relaxed text-text-muted">
                {service.longDescription}
              </p>
            )}

            <div className="rounded-2xl bg-bg-card p-6 sm:p-8">
              <h2 className="text-xl font-extrabold tracking-tight text-text-primary mb-3">
                הבעיה
              </h2>
              <p className="text-base leading-relaxed text-text-muted">
                {service.problem}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold tracking-tight text-text-primary mb-4">
                מה תקבלו
              </h2>
              <ul className="space-y-3">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-base leading-relaxed text-text-muted">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {service.audiences.map((audience) => (
                <span
                  key={audience}
                  className="text-sm font-medium text-primary bg-primary/10 rounded-full px-4 py-1.5"
                >
                  {audience === 'freelancers' && 'עצמאים'}
                  {audience === 'employees' && 'שכירים'}
                  {audience === 'companies' && 'חברות'}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <MidPageCta
        title="מעוניינים בשירות זה?"
        body="צרו קשר ונתאם פגישת ייעוץ ראשונית ללא עלות."
        className="pb-16 sm:pb-24"
      />

      <section className="pb-16 sm:pb-24">
        <Container className="max-w-3xl text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
          >
            <ArrowRight className="size-5" />
            <span>חזרה לכל השירותים</span>
          </Link>
        </Container>
      </section>
    </>
  )
}
