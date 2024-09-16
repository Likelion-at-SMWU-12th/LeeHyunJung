import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useProductStore = create(
  devtools((set) => ({
    products: [],
    addProduct: (productId, title, lprice, image, link) =>
      set((state) => ({
        products: [
          ...state.products,
          { productId, title, lprice, image, link },
        ],
      })),
    removeProduct: (productId) =>
      set((state) => ({
        products: state.products.filter(
          (product) => product.productId !== productId
        ),
      })),
  }))
);

export const useSearchStore = create((set) => ({
  query: "아이폰",
  setQuery: (state) => set({ query: state }),
}));

export default useProductStore;
