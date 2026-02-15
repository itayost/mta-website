'use client'

import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useTransform, animate } from 'motion/react'
import { cn } from '@/lib/utils'

interface AnimatedCounterProps {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  duration = 2,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (latest) => Math.round(latest))

  useEffect(() => {
    if (isInView) {
      animate(motionValue, target, { duration, ease: 'easeOut' })
    }
  }, [isInView, motionValue, target, duration])

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${latest.toLocaleString('he-IL')}${suffix}`
      }
    })
    return unsubscribe
  }, [rounded, prefix, suffix])

  return (
    <span ref={ref} className={cn(className)}>
      {prefix}0{suffix}
    </span>
  )
}
