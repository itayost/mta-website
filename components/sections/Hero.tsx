import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowLeft, Star } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { AnimateOnScroll, StaggerChildren, StaggerItem } from '@/components/ui/motion'
import { Parallax } from '@/components/ui/motion/Parallax'
import { RotatingText } from './RotatingText'
import { contactInfo } from '@/data/contact'

const rotatingPhrases = [
  'חיסכון במס לעצמאים',
  'דוחות שנתיים לשכירים',
  'ביקורת חשבונות לחברות',
  'ייעוץ מס אישי ומקצועי',
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-bl from-navy-900 via-navy-800 to-navy-950 py-20 sm:py-28 lg:py-36">
      {/* Decorative blurs with parallax */}
      <Parallax offset={-50} className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 start-1/4 size-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-1/4 end-1/3 size-72 rounded-full bg-primary blur-3xl" />
      </Parallax>

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text column (first in DOM = right side in RTL) */}
          <div>
            <AnimateOnScroll preset="fade-in" delay={0}>
              <p className="mb-4 text-primary/80 text-lg font-medium">
                מעל 40 שנות ניסיון
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll preset="fade-in-up" delay={0.1}>
              <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
                <span className="text-gradient-hero">רואי חשבון ויועצי מס</span>
                <span className="block text-accent mt-2">בחיפה</span>
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll preset="fade-in-up" delay={0.2}>
              <p className="mt-6 font-light text-xl text-text-primary/80 leading-relaxed max-w-2xl">
                משרד מזון מלווה עצמאים, שכירים וחברות בכל תחומי המיסוי, החשבונאות
                והייעוץ הפיננסי. מקצוענות, אמינות ושירות אישי.
              </p>
            </AnimateOnScroll>

            {/* Rotating text — audience-specific benefits */}
            <AnimateOnScroll preset="fade-in" delay={0.25}>
              <div className="mt-4 h-8 flex items-center">
                <span className="text-text-muted/60 text-sm me-2">|</span>
                <RotatingText
                  phrases={rotatingPhrases}
                  className="text-sm font-medium text-gold"
                />
              </div>
            </AnimateOnScroll>

            {/* Trust badges */}
            <StaggerChildren className="mt-6 flex flex-wrap gap-3">
              {['40+ שנות ניסיון', '1,000+ לקוחות', 'מומחי מיסוי'].map((badge) => (
                <StaggerItem key={badge}>
                  <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 text-sm font-medium text-white">
                    {badge}
                  </span>
                </StaggerItem>
              ))}
            </StaggerChildren>

            {/* Social proof micro-bar */}
            <AnimateOnScroll preset="fade-in" delay={0.3}>
              <div className="mt-4 flex items-center gap-1.5 text-text-muted/50 text-sm">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-accent text-accent" />
                  ))}
                </div>
                <span>מדורג 5/5 על ידי לקוחותינו</span>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll preset="fade-in-up" delay={0.35} className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-bg-main shadow-lg shadow-primary/25 hover:bg-primary-dark hover:text-white hover:shadow-xl transition-all active:scale-[0.98] btn-shimmer"
              >
                <span>פגישת ייעוץ חינם</span>
                <ArrowLeft className="size-5" />
              </Link>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 backdrop-blur-sm px-6 py-3.5 text-base font-semibold text-text-primary hover:bg-white/10 transition-all"
              >
                <Phone className="size-5" />
                <span>{contactInfo.phone}</span>
              </a>
            </AnimateOnScroll>
          </div>

          {/* Image column (desktop only, left side in RTL) */}
          <div className="hidden lg:block">
            <AnimateOnScroll preset="fade-in" delay={0.2}>
              <div className="relative">
                {/* Glow behind */}
                <div className="absolute -inset-8 bg-primary/10 blur-3xl rounded-full" aria-hidden="true" />
                {/* Image container */}
                <div className="relative aspect-[4/5] rounded-3xl border border-white/10 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=1000&fit=crop"
                    alt="ייעוץ פיננסי מקצועי"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 0px, 50vw"
                    priority
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-navy-900/20" />
                  {/* Glass badge */}
                  <div className="absolute bottom-6 inset-x-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 px-5 py-4">
                    <p className="text-text-primary font-bold text-lg">משרד מזון, חיפה</p>
                    <p className="text-text-muted text-sm mt-1">מקצוענות ואמינות מאז 1983</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </Container>
    </section>
  )
}
