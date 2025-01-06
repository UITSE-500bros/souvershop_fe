import { Product } from "@/models/Product";
import { create } from "zustand";

type FavoriteStore = {
  favoriteItems: Product[];
  addToFavorite: (product: Product) => void;
  removeFromFavorite: (productId: string) => void;
  clearFavorite: () => void;
};

const useFavoriteStore = create<FavoriteStore>((set) => {
  return {
    favoriteItems: [],
    addToFavorite: (product) => {
      set((state) => {
        const existingItem = state.favoriteItems.find(
          (item) => item.product_id === product.product_id,
        );
        if (existingItem) {
          return {
            favoriteItems: state.favoriteItems.map((item) =>
              item.product_id === product.product_id
                ? { ...item, is_favourited: true }
                : item,
            ),
          };
        }
        return {
          favoriteItems: [
            ...state.favoriteItems,
            { ...product, is_favourited: true },
          ],
        };
      });
    },
    removeFromFavorite: (productId) => {
      set((state) => ({
        favoriteItems: state.favoriteItems.filter(
          (item) => item.product_id !== productId,
        ),
      }));
    },
    clearFavorite: () => {
      set({ favoriteItems: [] });
    },
  };
});
export default useFavoriteStore;
