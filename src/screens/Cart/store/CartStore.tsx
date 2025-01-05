import { Product } from "@/models/Product";
import { create } from "zustand";

type CartStore = {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
};

const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  getTotalPrice: () => 0,
}));

export default useCartStore;
