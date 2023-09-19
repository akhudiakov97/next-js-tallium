'use client'

import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import {ReactChildren} from '@/lib/types'
import './globals.css'


/**
 * The homepage root layout.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/layout
 */
export default function RootLayout({children}: ReactChildren) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
