import { Nunito_Sans, Rubik } from 'next/font/google';

// Use Nunito Sans as heading font (Gilroy alternative)
export const heading = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
  // Add fallback fonts for better loading
  fallback: ['system-ui', 'Arial', 'sans-serif'],
});

export const body = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
  // Add fallback fonts for better loading
  fallback: ['system-ui', 'Arial', 'sans-serif'],
});
