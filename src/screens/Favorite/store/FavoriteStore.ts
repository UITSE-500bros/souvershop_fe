import { Product } from "@/models/Product";
import { create } from "zustand";
import { getFavourite } from "../services/favour.service";

type FavoriteStore = {
  favoriteItems: Product[];
  addToFavorite: (product: Product) => void;
  setFavoriteItems: () => void;
  removeFromFavorite: (productId: string) => void;
  clearFavorite: () => void;
};

const useFavoriteStore = create<FavoriteStore>((set) => {
  return {
    favoriteItems: [],
    setFavoriteItems: () => {
      getFavourite().then(
        (res) => {
        set(() => ({
          favoriteItems: res.reduce((merged: Product[], product: Product) => {
            const existing = merged.find((item) => item.product_id === product.product_id);
            if (existing) {
              existing.quantity += product.quantity || 1;
            } else {
              merged.push({
                ...product,
                quantity: product.quantity || 1,
              });
            }
            return merged;
          }, []),
        }));
      }).catch((err) => console.error(err));
    },
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
