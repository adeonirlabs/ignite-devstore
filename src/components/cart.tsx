'use client'

import { ShoppingBag } from 'lucide-react'

import { useStore } from '~/store'

export function Cart() {
  const items = useStore((state) => state.items)

  return (
    <button
      className="flex items-center gap-3"
      onClick={() => {
        console.info({ items })
      }}
      type="button"
    >
      <div className="relative">
        <div className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-teal-500 text-xs">
          {items.length}
        </div>
        <ShoppingBag className="h-6 w-6 text-zinc-500" />
      </div>
      <span className="text-sm">Cart</span>
    </button>
  )
}
