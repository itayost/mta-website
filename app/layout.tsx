import type { Metadata } from 'next'
import { heebo } from '@/lib/fonts'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://mta.co.il'),
  title: {
    default: 'משרד מזון – רואי חשבון ויועצי מס בחיפה',
    template: '%s | משרד מזון',
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
    siteName: 'משרד מזון – רואי חשבון ויועצי מס',
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
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <a href="#main-content" className="skip-link">
          דלג לתוכן
        </a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
