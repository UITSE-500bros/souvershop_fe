import CartItem from "@/models/CartItem";
import { Product } from "@/models/Product";
import { create } from "zustand";

type CartStore = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  getLength: () => number;
  updateQuantity: (productId: string, quantity: number) => void;
};

const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  addToCart: (product) => {
    set((state) => {
      const existingItem = state.cartItems.find(
        (item) => item.product_id === product.product_id,
      );
      if (existingItem) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.product_id === product.product_id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }
      return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] };
    });
  },
  removeFromCart: (productId) => {
    set((state) => ({
      cartItems: state.cartItems.filter(
        (item) => item.product_id !== productId,
      ),
    }));
  },
  clearCart: () => {
    set({ cartItems: [] });
  },
  getLength: (): number => {
    return useCartStore.getState().cartItems.length;
  },
  updateQuantity: (productId, quantity) => {
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.product_id === productId ? { ...item, quantity } : item,
      ),
    }));
  },
}));

export default useCartStore;
