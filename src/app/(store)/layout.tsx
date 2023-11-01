import type { ReactNode } from 'react'

import { Header } from '~/components/header'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Header />
      {children}
    </main>
  )
}
