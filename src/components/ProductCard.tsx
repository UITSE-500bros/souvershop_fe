import React from "react";
import { FaStar } from "react-icons/fa"; 

interface ProductCardProps {
  name: string;       
  price: number;      
  imageUrl: string;   
  rating: number;     
}
const ProductCard: React.FC<ProductCardProps> = ({ name, price, imageUrl, rating }) => {
  return (
    <div className="product-card border rounded-lg shadow-md p-4 my-4 bg-white flex items-center">
    
    <img src={imageUrl} alt={name} className="w-48 h-48 object-cover rounded mr-4" />
    <div className="product-info flex flex-col justify-between">
      <h2 className="font-bold text-lg">{name}</h2>
      <div className="flex my-2">
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} className={index < rating ? "text-yellow-500" : "text-gray-300"} />
        ))}
      </div>
      <p className="text-green-500 font-semibold">Giá: {price.toLocaleString()} VNĐ</p>
    </div>
  </div>
  );
};

export default ProductCard;