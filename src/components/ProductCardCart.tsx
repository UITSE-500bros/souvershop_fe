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
    <div className="flex items-center justify-between w-full max-w-3xl p-4 border rounded-lg shadow-md bg-white mb-4">
      
      <div className="w-1/4">
        <img src={imageUrl} alt={name} className="w-full h-auto object-cover" />
      </div>

      
      <div className="flex-1 px-4">
        <h3 className="font-bold text-lg">{name}</h3>
        <p>Kích cỡ: {size}</p>
        <p>Màu sắc: {color}</p>
        <p>Giá: {price.toLocaleString()} đ / sản phẩm</p>
        <p>Tổng giá: {totalPrice.toLocaleString()} đ</p> 
      </div>

      
      <div className="flex items-center space-x-4">
        
        <div className="flex items-center border rounded-lg">
          <button
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
            onClick={() => handleQuantityChange(-1)}
          >
            -
          </button>
          <span className="px-4 py-1">{quantity}</span>
          <button
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
            onClick={() => handleQuantityChange(1)}
          >
            +
          </button>
        </div>

        
        <button onClick={onRemove} className="text-red-500 hover:text-red-700">
          <FaTrash size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProductCardCart;
