import { Heebo, Frank_Ruhl_Libre } from 'next/font/google'

export const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  weight: 'variable',
  variable: '--font-heebo',
  display: 'swap',
})

export const frankRuhlLibre = Frank_Ruhl_Libre({
  subsets: ['hebrew', 'latin'],
  weight: 'variable',
  variable: '--font-frank-ruhl-libre',
  display: 'swap',
})
