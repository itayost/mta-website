'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { cn } from '@/lib/utils'

interface ParallaxProps {
  children: ReactNode
  offset?: number
  className?: string
}

export function Parallax({ children, offset = -50, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, offset])

  return (
    <div ref={ref} className={cn('relative', className)}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  )
}
