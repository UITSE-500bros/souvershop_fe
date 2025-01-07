import { Product } from "./Product";

interface CartItem extends Product {
  quantity: number;
  total:number;
}

export default CartItem;
