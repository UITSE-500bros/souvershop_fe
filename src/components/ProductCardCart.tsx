import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import ButtonGroup from "./ButtonGroup";
import CartItem from "@/models/CartItem";
import useCartStore from "@/screens/Cart/store/CartStore";
import { formatPrice } from "@/utils/FormatPrice";

interface ProductCardCartProps {
  cartItem: CartItem;
}

const ProductCardCart: React.FC<ProductCardCartProps> = ({ cartItem }) => {
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const removeItem = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const onQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
    updateQuantity(cartItem.product_id, newQuantity);

  }

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <div className="relative mb-4 flex w-full max-w-3xl rounded-lg border bg-white p-4 shadow-md">
      <div className="w-1/4">
        <img src={cartItem.product_image[0]} alt={cartItem.product_name} className="h-auto w-full object-cover" />
      </div>

      <div className="relative flex-1 px-4">
        <h3 className="text-lg max-h-[80px]  overflow-hidden font-bold">{cartItem.product_name}</h3>
        <p className="absolute bottom-0 left-0 font-bold">
          {formatPrice(cartItem.total)}
        </p>
      </div>

      <button
        onClick={()=>removeItem(cartItem.product_id)}
        className="absolute right-2 top-2 text-red-500 hover:text-red-700"
      >
        <FaTrash size={20} />
      </button>

      <div className="absolute bottom-2 right-2 flex w-32 items-center justify-between rounded-full border border-gray-300 bg-gray-100 p-1">
        <ButtonGroup
          value={quantity}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </div>
    </div>
  );
};

export default ProductCardCart;
