'use client'

import Link from 'next/link'
import { Phone, ArrowLeft } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SplitText } from '@/components/ui/motion/SplitText'
import { Spotlight } from '@/components/ui/effects/Spotlight'
import RotatingText from '@/components/sections/RotatingText'
import { AnimateOnScroll } from '@/components/ui/motion'
import { contactInfo } from '@/data/contact'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-main py-20 sm:py-28 lg:py-36">
      <Spotlight
        className="-top-40 start-0 md:-top-20 md:start-60"
        fill="#3b82f6"
      />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-primary text-lg font-medium">
            מעל 40 שנות ניסיון
          </p>

          <h1 className="text-5xl font-extrabold tracking-tight text-text-primary sm:text-6xl lg:text-7xl">
            <SplitText text="רואי חשבון ויועצי מס" delay={0.2} />
            <span className="mt-3 flex justify-center">
              <RotatingText
                texts={['בחיפה', 'לעסקים', 'לעצמאים', 'לשכירים']}
                rotationInterval={3000}
                splitBy="characters"
                staggerFrom="last"
                staggerDuration={0.025}
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                mainClassName="px-6 py-2 bg-primary text-white overflow-hidden justify-center rounded-xl"
                splitLevelClassName="overflow-hidden pb-1"
              />
            </span>
          </h1>

          <AnimateOnScroll preset="fade-in-up" delay={0.4}>
            <p className="mt-6 text-xl text-text-muted leading-relaxed mx-auto max-w-2xl">
              משרד מזון מלווה עצמאים, שכירים וחברות בכל תחומי המיסוי, החשבונאות
              והייעוץ הפיננסי. מקצוענות, אמינות ושירות אישי.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll preset="fade-in-up" delay={0.5} className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3.5 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-all active:scale-[0.98]"
            >
              <span>פגישת ייעוץ חינם</span>
              <ArrowLeft className="size-5" />
            </Link>
            <a
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-text-muted/30 px-6 py-3.5 text-base font-semibold text-text-primary hover:bg-primary/5 transition-all"
            >
              <Phone className="size-5" />
              <span>{contactInfo.phone}</span>
            </a>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  )
}
