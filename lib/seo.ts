import type { Metadata } from 'next'
import { contactInfo } from '@/data/contact'

const SITE_URL = 'https://mta.co.il'
const SITE_NAME = 'משרד מזון – רואי חשבון ויועצי מס'

interface PageSeoConfig {
  title: string
  description: string
  path: string
  keywords?: string[]
}

export function generatePageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageSeoConfig): Metadata {
  const url = `${SITE_URL}${path}`
  const fullTitle = path === '/' ? SITE_NAME : `${title} | ${SITE_NAME}`

  return {
    title: fullTitle,
    description,
    keywords: [
      'רואה חשבון חיפה',
      'יועץ מס בחיפה',
      'הנהלת חשבונות חיפה',
      ...keywords,
    ],
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'he_IL',
      type: 'website',
    },
    alternates: {
      canonical: url,
    },
  }
}

export function buildLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['AccountingService', 'ProfessionalService'],
    name: 'משרד מזון – רואי חשבון ויועצי מס',
    description:
      'משרד רואי חשבון ויועצי מס ותיק בחיפה. שירותי הנהלת חשבונות, ייעוץ מס, ביקורת חשבונות ושירותים נוספים לעצמאים, שכירים וחברות.',
    url: SITE_URL,
    telephone: contactInfo.phone,
    email: contactInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: contactInfo.address.street,
      addressLocality: contactInfo.address.city,
      postalCode: contactInfo.address.zip,
      addressCountry: 'IL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: contactInfo.address.lat,
      longitude: contactInfo.address.lng,
    },
    openingHoursSpecification: contactInfo.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: {
      '@type': 'City',
      name: 'חיפה',
    },
    priceRange: '$$',
    foundingDate: '1985',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 5,
      maxValue: 15,
    },
  }
}

export function buildFaqJsonLd(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}
