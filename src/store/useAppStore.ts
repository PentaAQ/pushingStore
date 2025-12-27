import { create } from "zustand"
import { createCartSlice, type CartSliceType } from "./slices/CartSlice"
import { devtools } from "zustand/middleware"

export const useAppStore = create<CartSliceType>()(devtools((...a)=>({
  ...createCartSlice(...a)
})))