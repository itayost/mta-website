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
    default: 'מזון ייעוץ מס – יועצי מס מוסמכים בחיפה',
    template: '%s | מזון ייעוץ מס',
  },
  description:
    'משרד יועצי מס מוסמכים ותיק בחיפה. 50+ שנות ניסיון בהנהלת חשבונות, ייעוץ מס, ייעוץ פרישה ושירותים נוספים לעצמאים, שכירים וחברות.',
  keywords: [
    'יועץ מס מוסמך בחיפה',
    'יועץ מס בחיפה',
    'הנהלת חשבונות חיפה',
    'משרד יועצי מס',
    'ייעוץ מס',
    'ייעוץ פרישה',
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
