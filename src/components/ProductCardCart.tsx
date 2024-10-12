import React, { useState } from "react";

interface ProductCardCartProps {
  name: string;        
  price: number;       
  imageUrl: string;    
  size: string;        
  color: string;       
}

const ProductCardCart: React.FC<ProductCardCartProps> = ({ name, price, imageUrl, size, color }) => {
 
  const [quantity, setQuantity] = useState(1);

  
  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="product-card border rounded-lg shadow-md p-4 my-4 bg-white flex items-center">
      
      <img src={imageUrl} alt={name} className="w-48 h-48 object-cover rounded mr-4" />
      <div className="product-info flex flex-col justify-between w-full">
        <h2 className="font-bold text-lg">{name}</h2>
        <p className="text-gray-500">Size: {size}</p>
        <p className="text-gray-500">Color: {color}</p>
        <p className="text-green-500 font-semibold">Giá: {price.toLocaleString()} VNĐ</p>
        <div className="flex items-center my-2">
          <button 
            onClick={decreaseQuantity} 
            className="px-2 py-1 border border-gray-300 rounded-l hover:bg-gray-200"
          >
            -
          </button>
          <span className="px-4 py-1 border-t border-b border-gray-300">{quantity}</span>
          <button 
            onClick={increaseQuantity} 
            className="px-2 py-1 border border-gray-300 rounded-r hover:bg-gray-200"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardCart;
