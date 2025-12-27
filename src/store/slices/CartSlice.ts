import type { StateCreator } from "zustand";

export type CartSliceType = {
  stateCart: boolean;
  setStateCart: () => void;
};

export const createCartSlice: StateCreator<CartSliceType> = (set) => ({
  stateCart: false,
  setStateCart: () => set((state) => ({ stateCart: !state.stateCart })),
});
