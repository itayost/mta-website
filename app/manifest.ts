import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'מזון ייעוץ מס – חשבונאים ויועצי מס',
    short_name: 'מזון ייעוץ מס',
    description:
      'משרד חשבונאים ויועצי מס ותיק בחיפה. הנהלת חשבונות, ייעוץ מס, ביקורת חשבונות ושירותים נוספים.',
    dir: 'rtl',
    lang: 'he',
    start_url: '/',
    display: 'standalone',
    background_color: '#f0ece7',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
