'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowLeft } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SplitText } from '@/components/ui/motion/SplitText'
import RotatingText from '@/components/sections/RotatingText'
import { AnimateOnScroll } from '@/components/ui/motion'
import { contactInfo } from '@/data/contact'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-main ">
      {/* Dark strip on the end (left in RTL) ~35% of width */}
      <div className="absolute inset-y-0 end-0 hidden w-[35%] bg-bg-dark lg:block" aria-hidden="true" />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-10 pt-10 pb-12 sm:pt-14 sm:pb-16 lg:grid-cols-2 lg:gap-12 lg:pb-0 lg:pt-16">
          {/* Text side (appears on the right in RTL) */}
          <div className="lg:py-44">
            <AnimateOnScroll preset="fade-in-up" delay={0.1}>
              <p className="mb-4 text-lg font-medium text-primary">
                מעל 40 שנות ניסיון
              </p>
            </AnimateOnScroll>

            <h1 className="text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              <SplitText text="רואי חשבון ויועצי מס" delay={0.2} />
              <span className="mt-3 flex">
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

            <AnimateOnScroll preset="fade-in-up" delay={0.4}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-text-muted">
                משרד מזון מלווה עצמאים, שכירים וחברות בכל תחומי המיסוי, החשבונאות
                והייעוץ הפיננסי. מקצוענות, אמינות ושירות אישי.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll preset="fade-in-up" delay={0.5} className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all active:scale-[0.98]"
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

          {/* Image side (appears on the left in RTL) — flush to bottom */}
          <AnimateOnScroll preset="fade-in-up" delay={0.3} className="lg:self-end">
            <div className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-auto lg:h-[34rem] overflow-hidden rounded-t-2xl lg:rounded-b-none">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=1000&fit=crop&crop=center"
                alt="פגישת ייעוץ מקצועית"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  )
}
