'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'
import { getConsent } from '@/lib/consent'

const GA_ID_PATTERN = /^G-[A-Z0-9]+$/
const RAW_GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
const GA_ID = RAW_GA_ID && GA_ID_PATTERN.test(RAW_GA_ID) ? RAW_GA_ID : null

export function GoogleAnalytics() {
  const [allowed, setAllowed] = useState(false)

  useEffect(() => {
    setAllowed(getConsent() === 'accepted')

    const onConsentUpdate = () => {
      setAllowed(getConsent() === 'accepted')
    }

    window.addEventListener('consent-updated', onConsentUpdate)
    return () => window.removeEventListener('consent-updated', onConsentUpdate)
  }, [])

  if (!GA_ID || !allowed) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  )
}
