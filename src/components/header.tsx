import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import type { ComponentProps } from 'react'

import { Cart } from '~/components/cart'

export function Header(props: ComponentProps<'header'>) {
  return (
    <header className="flex items-center justify-between" {...props}>
      <div className="flex items-center gap-4">
        <Link className="text-2xl font-extrabold text-zinc-50" href="/">
          devstore
        </Link>
        <form className="flex w-80 items-center gap-3 rounded-full bg-zinc-900 px-4 py-2 ring-2 ring-zinc-700">
          <Search className="h-5 w-5 text-zinc-500" />
          <input
            className="w-full bg-transparent text-sm placeholder:text-zinc-500 focus:outline-none"
            placeholder="Buscar produtos"
          />
        </form>
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
