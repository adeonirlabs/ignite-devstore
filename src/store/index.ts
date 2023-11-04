import { create } from 'zustand'

interface CartItem {
  productId: string
  amount: number
}

interface Store {
  items: CartItem[]
  addItem: (productId: string) => void
}

export const useStore = create<Store>((set) => ({
  items: [],
  addItem: (productId) => {
    set((state) => {
      const cartItem = state.items.find((item) => item.productId === productId)

      if (cartItem) {
        cartItem.amount++

        return { items: [...state.items] }
      }

      return { items: [...state.items, { productId, amount: 1 }] }
    })
  },
}))
