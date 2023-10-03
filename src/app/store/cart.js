import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

const cart = [
  {
    productId: 1,
    quantity: 1,
    checked: true
  },
  {
    productId: 20,
    quantity: 1,
    checked: true
  },
  {
    productId: 30,
    quantity: 1,
    checked: true
  },
]

const cartStore = (set) => ({
  cart: cart,
  addProduct: (product) => {
    set((state) => ({
      cart: [product, ...state.cart],
    }))
  },
  setProductQuantity: (id, no) => {
    set((state) => ({
      cart: state.cart.map((product) => product.productId === id ? { ...product, quantity: no } : product)
    }))
  },
  toggleCheckProduct: (id) => {
    set((state) => ({
      cart: state.cart.map((product) => product.productId === id ? { ...product, checked: !product.checked } : product)
    }))
  },
  deleteProduct: (id) => {
    set((state) => ({
      cart: state.cart.filter((product) => product.productId !== id)
    }))
  },
})

const useCartStore = create(
  devtools(
    persist(cartStore, {
      name: "cart",
    })
  )
)

export default useCartStore;