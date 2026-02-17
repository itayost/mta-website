'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export function CopyLinkButton() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback: do nothing if clipboard API unavailable
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-2 rounded-full bg-bg-surface px-4 py-2 text-sm font-semibold text-text-primary hover:bg-primary/5 transition-all"
      aria-label="העתק קישור"
    >
      {copied ? <Check className="size-4 text-success" /> : <Copy className="size-4" />}
      <span>{copied ? 'הקישור הועתק!' : 'העתק קישור'}</span>
    </button>
  )
}
