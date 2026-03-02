import type { Metadata } from 'next'
import { contactInfo } from '@/data/contact'

export const SITE_URL = 'https://mta-website-six.vercel.app'
export const SITE_NAME = 'מזון ייעוץ מס – יועצי מס מוסמכים'

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
      'יועץ מס מוסמך בחיפה',
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
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
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
    name: SITE_NAME,
    description:
      'משרד יועצי מס מוסמכים ותיק בחיפה. שירותי הנהלת חשבונות, ייעוץ מס, ייעוץ פרישה ושירותים נוספים לעצמאים, שכירים וחברות.',
    url: SITE_URL,
    telephone: contactInfo.phone,
    faxNumber: contactInfo.fax,
    email: contactInfo.emails[0],
    address: {
      '@type': 'PostalAddress',
      streetAddress: contactInfo.address.street,
      addressLocality: contactInfo.address.city,
      postalCode: contactInfo.address.zip,
      postOfficeBoxNumber: contactInfo.address.poBox,
      addressCountry: 'IL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: contactInfo.address.lat,
      longitude: contactInfo.address.lng,
    },
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

interface ArticleJsonLdConfig {
  title: string
  description: string
  slug: string
  date: string
  author: string
  image?: string
  tags?: string[]
}

export function buildArticleJsonLd({
  title,
  description,
  slug,
  date,
  author,
  image,
  tags = [],
}: ArticleJsonLdConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url: `${SITE_URL}/blog/${slug}`,
    datePublished: date,
    dateModified: date,
    inLanguage: 'he',
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    ...(image && { image }),
    ...(tags.length > 0 && { keywords: tags.join(', ') }),
  }
}

export function buildBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}
