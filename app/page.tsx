import { Hero } from '@/components/sections/Hero'
import { BenefitsBar } from '@/components/sections/BenefitsBar'
import { BentoGrid } from '@/components/sections/BentoGrid'
import { MiniAbout } from '@/components/sections/MiniAbout'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { RoundedTransition, RoundedTransitionUp } from '@/components/ui/RoundedTransition'
import { buildLocalBusinessJsonLd, generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'מזון ייעוץ מס – יועצי מס מוסמכים בחיפה',
  description:
    'משרד יועצי מס מוסמכים ותיק בחיפה. 50+ שנות ניסיון בהנהלת חשבונות, ייעוץ מס, ייעוץ פרישה ושירותים נוספים לעצמאים, שכירים וחברות.',
  path: '/',
  keywords: ['משרד יועצי מס', 'ייעוץ מס', 'ייעוץ פרישה', 'הנהלת חשבונות'],
})

export default function HomePage() {
  const jsonLd = buildLocalBusinessJsonLd()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />

      {/* Benefits bar */}
      <BenefitsBar />

      {/* Services */}
      <BentoGrid />

      {/* Mini-about */}
      <RoundedTransition from="bg-bg-main" to="bg-bg-surface" />
      <MiniAbout />
      <RoundedTransitionUp from="bg-bg-surface" to="bg-bg-main" />

      {/* CTA */}
      <CtaBanner />
    </>
  )
}
