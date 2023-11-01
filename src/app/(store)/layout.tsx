import type { ReactNode } from 'react'

import { Header } from '~/components/header'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto grid min-h-screen w-full max-w-8xl grid-rows-app gap-5 p-8">
      <Header />
      {children}
    </main>
  )
}
