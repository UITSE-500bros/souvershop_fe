import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import ButtonGroup from "./ButtonGroup"; // Đảm bảo import đúng

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

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
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
        <p className="font-bold">{totalPrice.toLocaleString()} đ</p>
      </div>

      <button
        onClick={onRemove}
        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
      >
        <FaTrash size={20} />
      </button>

      <div className="absolute bottom-2 right-2 w-32 border border-gray-300 rounded-full flex items-center justify-between p-1 bg-gray-100 ">
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
