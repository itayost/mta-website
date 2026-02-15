'use client'

import { motion } from 'motion/react'
import { MessageCircle } from 'lucide-react'
import { contactInfo } from '@/data/contact'

export function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${contactInfo.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 end-4 z-30 flex size-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 transition-colors hover:bg-green-600"
      aria-label="שלחו הודעה בוואטסאפ"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.15 }}
    >
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
      <MessageCircle className="size-7 relative" />
    </motion.a>
  )
}
