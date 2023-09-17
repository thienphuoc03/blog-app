import { cx } from '@/utils/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-in',
})

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mr',
})

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cx(
          inter.variable,
          manrope.variable,
          'font-mr bg-light dark:bg-dark'
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
