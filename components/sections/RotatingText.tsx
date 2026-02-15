'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface RotatingTextProps {
  phrases: string[]
  interval?: number
  className?: string
}

export function RotatingText({ phrases, interval = 3500, className }: RotatingTextProps) {
  const [index, setIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length)
        setIsVisible(true)
      }, 400)
    }, interval)

    return () => clearInterval(timer)
  }, [phrases.length, interval])

  return (
    <span
      className={cn(
        'inline-block transition-all duration-400',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2',
        className
      )}
    >
      {phrases[index]}
    </span>
  )
}
