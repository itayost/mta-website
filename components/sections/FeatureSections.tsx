'use client'

import {
  BookOpen,
  Calculator,
  ClipboardCheck,
  FileText,
  Users,
  TrendingUp,
  Receipt,
  Shield,
  Building,
  BarChart3,
  Target,
  Home,
  Globe,
  Landmark,
  Heart,
  Search,
  LineChart,
  type LucideIcon,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AnimateOnScroll, StaggerChildren, StaggerItem } from '@/components/ui/motion'
import { cn } from '@/lib/utils'
import type { ServiceCategory } from '@/types/service'

/* ------------------------------------------------------------------ */
/*  Icon map                                                           */
/* ------------------------------------------------------------------ */

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Calculator,
  ClipboardCheck,
  FileText,
  Users,
  TrendingUp,
  Receipt,
  Shield,
  Building,
  BarChart3,
  Target,
  Home,
  Globe,
  Landmark,
  Heart,
  Search,
  LineChart,
}

/* ------------------------------------------------------------------ */
/*  Props                                                              */
/* ------------------------------------------------------------------ */

interface FeatureSectionsProps {
  categories: ServiceCategory[]
  className?: string
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function FeatureSections({ categories, className }: FeatureSectionsProps) {
  return (
    <div className={cn('space-y-20', className)}>
      {categories.map((category) => (
        <section key={category.id} id={category.id} className="scroll-mt-24">
          <Container>
            <AnimateOnScroll preset="fade-in">
              <SectionHeading
                id={`heading-${category.id}`}
                title={category.title}
                subtitle={category.description}
              />
            </AnimateOnScroll>

            <StaggerChildren
              staggerDelay={0.08}
              className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {category.services.map((service) => {
                const Icon = iconMap[service.icon]

                return (
                  <StaggerItem key={service.id}>
                    <div
                      className={cn(
                        'group relative rounded-2xl bg-bg-card p-6 transition-colors hover:bg-bg-surface',
                        'flex flex-col h-full'
                      )}
                    >
                      {/* Icon */}
                      <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                        {Icon ? (
                          <Icon className="size-6" />
                        ) : (
                          <div className="size-6 rounded bg-primary/30" />
                        )}
                      </div>

                      {/* Title + description */}
                      <h3 className="text-lg font-bold text-text-primary">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm text-text-muted leading-relaxed flex-1">
                        {service.description}
                      </p>

                      {/* Benefits */}
                      {service.benefits.length > 0 && (
                        <ul className="mt-4 space-y-1.5">
                          {service.benefits.slice(0, 3).map((benefit, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-xs text-text-muted/80"
                            >
                              <span className="mt-1.5 size-1 flex-shrink-0 rounded-full bg-primary/50" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </StaggerItem>
                )
              })}
            </StaggerChildren>
          </Container>
        </section>
      ))}
    </div>
  )
}
