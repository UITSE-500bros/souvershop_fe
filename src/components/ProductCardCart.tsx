import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

interface ProductCardCartProps {
  name: string;
  price: number;
  imageUrl: string;
  size: string;
  color: string;
  initialQuantity: number;
  onRemove: () => void;
}

const ProductCardCart: React.FC<ProductCardCartProps> = ({
  name,
  price,
  imageUrl,
  size,
  color,
  initialQuantity,
  onRemove,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const totalPrice = price * quantity;

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="relative flex w-full max-w-3xl p-4 border rounded-lg shadow-md bg-white mb-4">
      <div className="w-1/4">
        <img src={imageUrl} alt={name} className="w-full h-auto object-cover" />
      </div>

      <div className="flex-1 px-4">
        <h3 className="font-bold text-lg">{name}</h3>
        <p>Kích cỡ: {size}</p>
        <p>Màu sắc: {color}</p>
        <p className="font-bold"> {totalPrice.toLocaleString()} đ</p>
      </div>

      <button
        onClick={onRemove}
        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
      >
        <FaTrash size={20} />
      </button>

      <div className="absolute bottom-2 right-2 flex items-center border rounded-[62px] bg-gray-200 p-1 space-x-2">
        <button
          className="px-2 py-1 text-lg bg-gray-200 hover:bg-gray-300"
          onClick={() => handleQuantityChange(-1)}
        >
          -
        </button>
        <span className="px-3">{quantity}</span>
        <button
          className="px-2 py-1 text-lg bg-gray-200 hover:bg-gray-300"
          onClick={() => handleQuantityChange(1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCardCart;
