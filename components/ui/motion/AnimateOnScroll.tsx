'use client'

import { type ReactNode } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

type Preset = 'fade-in' | 'fade-in-up' | 'scale-in' | 'slide-in-start' | 'slide-in-end'

interface AnimateOnScrollProps {
  children: ReactNode
  preset?: Preset
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}

const presets: Record<Preset, { initial: Record<string, number>; animate: Record<string, number> }> = {
  'fade-in': {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  'fade-in-up': {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
  },
  'scale-in': {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
  },
  // RTL: slide-in-start = from physical right (logical start in RTL)
  'slide-in-start': {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
  },
  // RTL: slide-in-end = from physical left (logical end in RTL)
  'slide-in-end': {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
  },
}

export function AnimateOnScroll({
  children,
  preset = 'fade-in-up',
  delay = 0,
  duration = 0.5,
  className,
  once = true,
}: AnimateOnScrollProps) {
  const { initial, animate } = presets[preset]

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once, amount: 0.15 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
