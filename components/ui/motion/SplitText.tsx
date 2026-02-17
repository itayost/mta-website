'use client'

import { useMemo } from 'react'
import { motion } from 'motion/react'

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  staggerChildren?: number
  as?: React.ElementType
}

export function SplitText({
  text,
  className = '',
  delay = 0,
  staggerChildren = 0.05,
  as: Component = 'span',
}: SplitTextProps) {
  const words = useMemo(() => text.split(' '), [text])

  return (
    <Component className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * staggerChildren,
            ease: 'easeOut',
          }}
          className="inline-block me-2"
        >
          {word}
        </motion.span>
      ))}
    </Component>
  )
}
