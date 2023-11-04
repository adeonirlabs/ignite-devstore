'use client'

import { ShoppingBag } from 'lucide-react'

import { useStore } from '~/store'

export function Cart() {
  const items = useStore((state) => state.items)

  return (
    <button className="flex items-center gap-2" type="button">
      <ShoppingBag className="h-5 w-5 text-zinc-500" />
      <span className="text-sm">Cart ({items.length || 0})</span>
    </button>
  )
}
