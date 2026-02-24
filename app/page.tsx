import { Hero } from '@/components/sections/Hero'
import { BenefitsBar } from '@/components/sections/BenefitsBar'
import { BentoGrid } from '@/components/sections/BentoGrid'
import { MiniAbout } from '@/components/sections/MiniAbout'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { RoundedTransition, RoundedTransitionUp } from '@/components/ui/RoundedTransition'
import { buildLocalBusinessJsonLd, generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'מזון ייעוץ מס – רואי חשבון ויועצי מס בחיפה',
  description:
    'משרד רואי חשבון ויועצי מס ותיק בחיפה. מעל 40 שנות ניסיון בהנהלת חשבונות, ייעוץ מס, ביקורת חשבונות ושירותים נוספים לעצמאים, שכירים וחברות.',
  path: '/',
  keywords: ['משרד רואי חשבון', 'ייעוץ מס', 'ביקורת חשבונות', 'הנהלת חשבונות'],
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
