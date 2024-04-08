import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

interface Product {
  id: number,
  quantity: number,
  checked: boolean,
}

interface Store {
  cart: Product[];
  addProduct: (product: Product) => void;
  setProductQuantity: (id: number, no: number) => void;
  toggleCheckProduct: (id: number) => void;
  deleteProduct: (id: number) => void;
  clearCart: (ids: number[]) => void;
}



const useCartStore = create<Store>()(
  devtools(
    persist(
      (set) => ({
        cart: [],
        addProduct: (product) => {
          set((state) => {
            const existProductId = state.cart.findIndex((prod) => prod.id === product.id)

            if (existProductId !== -1) {
              const updatedCart = [...state.cart]
              updatedCart[existProductId] = { ...updatedCart[existProductId], ...product };
              return { cart: updatedCart };
            } else {
              return { cart: [product, ...state.cart] }
            }
          })
        },
        setProductQuantity: (id, no) => {
          set((state) => ({
            cart: state.cart.map((product) => product.id === id ? { ...product, quantity: no } : product)
          }))
        },
        toggleCheckProduct: (id) => {
          set((state) => ({
            cart: state.cart.map((product) => product.id === id ? { ...product, checked: !product.checked } : product)
          }))
        },
        deleteProduct: (id) => {
          set((state) => ({
            cart: state.cart.filter((product) => product.id !== id)
          }))
        },
        clearCart: (ids) => {
          set((state) => ({
            cart: state.cart.filter((product) => !ids.includes(product.id))
          }))
        }
      })
      ,
      { name: "cart" })
  )
)

export default useCartStore;