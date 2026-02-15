'use client'

import { type ReactNode } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

interface HoverScaleProps {
  children: ReactNode
  className?: string
}

export function HoverScale({ children, className }: HoverScaleProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
