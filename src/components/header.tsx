import Image from 'next/image'
import Link from 'next/link'
import type { ComponentProps } from 'react'
import { Suspense } from 'react'

import { Cart } from '~/components/cart'
import { SearchForm } from '~/components/search'

export function Header(props: ComponentProps<'header'>) {
  return (
    <header className="flex items-center justify-between" {...props}>
      <div className="flex items-center gap-4">
        <Link className="text-2xl font-extrabold text-zinc-50" href="/">
          devstore
        </Link>
        <Suspense fallback={null}>
          <SearchForm />
        </Suspense>
      </div>
      <div className="flex items-center gap-4">
        <Cart />
        <div className="h-6 w-0.5 bg-zinc-700" />
        <Link className="flex items-center gap-2 hover:underline" href="/">
          <span className="text-sm">Conta</span>
          <Image alt="" className="h-6 w-6 rounded-full" height={32} src="https://github.com/adeonir.png" width={32} />
        </Link>
      </div>
    </header>
  )
}
