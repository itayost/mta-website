import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/seo'
import { heebo, frankRuhlLibre } from '@/lib/fonts'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FormFab } from '@/components/layout/FormFab'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'מזון ייעוץ מס – רואי חשבון ויועצי מס בחיפה',
    template: '%s | מזון ייעוץ מס',
  },
  description:
    'משרד רואי חשבון ויועצי מס ותיק בחיפה. מעל 40 שנות ניסיון בהנהלת חשבונות, ייעוץ מס, ביקורת חשבונות ושירותים נוספים לעצמאים, שכירים וחברות.',
  keywords: [
    'רואה חשבון חיפה',
    'יועץ מס בחיפה',
    'הנהלת חשבונות חיפה',
    'משרד רואי חשבון',
    'ייעוץ מס',
    'ביקורת חשבונות',
  ],
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    siteName: SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${frankRuhlLibre.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">
        <a href="#main-content" className="skip-link">
          דלג לתוכן
        </a>
        <Header />
        <main id="main-content" className="flex-1 pt-16 sm:pt-20">{children}</main>
        <Footer />
        <FormFab />
      </body>
    </html>
  )
}
