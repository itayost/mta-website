'use client'

import { type ReactNode } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

interface StaggerChildrenProps {
  children: ReactNode
  staggerDelay?: number
  className?: string
}

const containerVariants = (staggerDelay: number) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
    },
  },
})

export function StaggerChildren({
  children,
  staggerDelay = 0.1,
  className,
}: StaggerChildrenProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants(staggerDelay)}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
