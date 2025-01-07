import { create } from "zustand";
import CartItem from "@/models/CartItem";
import { Product } from "@/models/Product";
import { getCart } from "../service/Cart.service";


type CartStore = {
  cartItems: CartItem[];
  setCartItems: () => void
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getLength: () => number;
};

const useCartStore = create<CartStore>((set, get) => ({
  cartItems: [],
  setCartItems: () => {
    getCart().then(
      (res) => {
      set(() => ({
        cartItems: res.products_list.reduce((merged: CartItem[], product: Product) => {
          const existing = merged.find((item) => item.product_id === product.product_id);
          if (existing) {
            existing.quantity += product.quantity || 1;
            existing.total = existing.product_selling_price * existing.quantity;
          } else {
            merged.push({
              ...product,
              quantity: product.quantity || 1,
              total: product.product_selling_price * (product.quantity || 1),
            });
          }
          return merged;
        }, []),
      }));
    }).catch((err) => console.error(err));
  },
  addToCart: (product) => {
    set((state) => {
      const existingItem = state.cartItems.find(
        (item) => item.product_id === product.product_id
      );
      if (existingItem) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.product_id === product.product_id
              ? { ...item, quantity: item.quantity + 1, total: item.product_selling_price * (item.quantity + 1) }
              : item
          ),
        };
      }
      return {
        cartItems: [
          ...state.cartItems,
          { ...product, quantity: 1, total: product.product_selling_price },
        ],
      };
    });
  },
  removeFromCart: (productId) => {
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.product_id !== productId),
    }));
  },
  updateQuantity: (productId, quantity) => {
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.product_id === productId
          ? { ...item, quantity, total: item.product_selling_price * quantity }
          : item
      ),
    }));
  },
  clearCart: () => {
    set({ cartItems: [] });
  },
  getLength: () => {
    return get().cartItems.length;
  },
}));

export default useCartStore;
