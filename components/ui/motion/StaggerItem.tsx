'use client'

import { type ReactNode } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

interface StaggerItemProps {
  children: ReactNode
  className?: string
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div variants={itemVariants} className={cn(className)}>
      {children}
    </motion.div>
  )
}
