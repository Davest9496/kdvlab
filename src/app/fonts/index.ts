import { Nunito_Sans, Rubik } from 'next/font/google'

// Nunito Sans as Gilroy alternative (free and similar)
export const heading = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
})

export const body = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})
