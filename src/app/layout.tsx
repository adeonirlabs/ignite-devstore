import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    template: '%s | DevStore',
    default: 'DevStore',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={inter.variable} lang="pt-br">
      <body className="bg-zinc-950 font-sans text-zinc-50 antialiased">{children}</body>
    </html>
  )
}
