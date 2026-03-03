'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowLeft } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SplitText } from '@/components/ui/motion/SplitText'
import { RotatingText } from '@/components/sections/RotatingText'
import { AnimateOnScroll } from '@/components/ui/motion'
import { contactInfo } from '@/data/contact'
import { LogoMotif } from '@/components/ui/LogoMotif'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-main">
      {/* Background image layer */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=2400&q=80&fit=crop&crop=center"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-bg-main/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/40 to-bg-main/60" />
      </div>

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-10 pt-10 pb-12 sm:pt-14 sm:pb-16 lg:grid-cols-2 lg:gap-12 lg:pb-0 lg:pt-16">
          {/* Text side (appears on the right in RTL) */}
          <div className="relative text-center lg:text-start lg:py-20">
            <h1 className="font-display text-4xl font-extrabold tracking-tight leading-tight text-text-primary sm:text-5xl lg:text-6xl">
              <SplitText text="ייעוץ מס וחשבונאות" delay={0.2} />
              <span className="mt-3 flex justify-center lg:justify-start">
                <RotatingText
                  texts={['לעסקים', 'לעצמאים', 'לשכירים']}
                  rotationInterval={3000}
                  splitBy="characters"
                  staggerFrom="last"
                  staggerDuration={0.025}
                  animatePresenceMode="popLayout"
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-120%' }}
                  transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                  mainClassName="px-5 py-1.5 bg-primary text-white overflow-hidden rounded-xl"
                  splitLevelClassName="overflow-hidden pb-1"
                />
              </span>
            </h1>

            <AnimateOnScroll preset="fade-in-up" delay={0.35}>
              <p className="mt-4 font-display text-xl font-extrabold tracking-tight text-text-primary sm:text-2xl">
                משרד בוטיק ויחס אישי לכל לקוח
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll preset="fade-in-up" delay={0.4}>
              <p className="mt-6 max-w-lg mx-auto lg:mx-0 text-lg leading-relaxed text-text-muted">
                ליווי פיננסי חכם, שוטף ופרואקטיבי שלא מחכה לסוף השנה. אנחנו מנהלים את המספרים במקצועיות ובשקיפות, כדי שאתה תוכל להתרכז במה שחשוב באמת: הצלחת העסק.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll preset="fade-in-up" delay={0.5} className="mt-8 flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 sm:px-7 sm:py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-primary-dark transition-all active:scale-[0.98]"
              >
                <span>קבעו שיחה עכשיו</span>
                <ArrowLeft className="size-5" />
              </Link>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-text-muted/30 px-3 py-3 sm:px-6 sm:py-3.5 text-sm sm:text-base font-semibold text-text-primary hover:bg-primary/5 transition-all"
              >
                <Phone className="size-5" />
                <span>{contactInfo.phone}</span>
              </a>
            </AnimateOnScroll>
          </div>

          {/* Brand card (appears on the left in RTL) */}
          <AnimateOnScroll preset="fade-in-up" delay={0.3} className="lg:self-center">
            <div className="flex flex-col items-center justify-center px-8 py-12 sm:px-12 sm:py-16 lg:py-20 text-center">
              <LogoMotif opacity={1} className="w-48 h-28 sm:w-56 sm:h-32 lg:w-64 lg:h-36 mb-4" />
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
                מזון ייעוץ מס
              </h2>
              <div className="mt-8" />
              <p className="font-display text-xl font-extrabold leading-relaxed tracking-wide text-text-primary sm:text-2xl mx-auto w-fit text-start" lang="he">
                הַשְׁלֵךְ עַל יְהוָה יְהָבְךָ
                <br />
                וְהוּא יְכַלְכְּלֶךָ
              </p>
              <span className="mt-3 text-base text-text-muted self-end">(תהלים נה, כג)</span>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  )
}
