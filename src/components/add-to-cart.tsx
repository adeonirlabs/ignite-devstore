'use client'

import { useStore } from '~/store'

export interface AddToCartProps {
  productId: number
}

export function AddToCart({ productId }: AddToCartProps) {
  const addItems = useStore((state) => state.addItem)

  return (
    <button
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
      onClick={() => {
        addItems(productId)
      }}
      type="button"
    >
      Adicionar à cesta
    </button>
  )
}
