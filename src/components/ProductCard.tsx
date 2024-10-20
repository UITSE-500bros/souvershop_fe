import React from "react";
import { FaStar, FaHeart, FaPlus } from "react-icons/fa";

export interface ProductCardProps {
  name: string;       
  price: number;      
  discountPrice?: number; 
  imageUrl: string;   
  rating: number;     
  isFavorite?: boolean; 
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  discountPrice,
  imageUrl,
  rating,
  isFavorite = false,
}) => {
  
  const discountPercentage = discountPrice ? Math.round(((price - discountPrice) / price) * 100) : 0;

  return (
    <div className="product-card border rounded-lg shadow-md p-4 my-4 bg-white w-[300px] h-[452px]">
      
      <div className="relative">
        <img src={imageUrl} alt={name} className="w-full h-40 object-cover rounded" />
      </div>

      
      <div className="product-info flex flex-col mt-2">
        
        <h2 className="font-bold text-sm flex justify-between items-center">
          {name}
          {discountPrice && <span className="text-red-500 text-xs">~{discountPercentage}%</span>} 
        </h2>

        
        {discountPrice && (
          <div className="flex justify-between items-center mt-1">
            <p className="text-gray-500 line-through text-sm">{price.toLocaleString()} VNĐ</p>
            <p className="text-green-500 font-semibold text-sm">{discountPrice.toLocaleString()} VNĐ</p>
          </div>
        )}

        
        {!discountPrice && (
          <p className="text-green-500 font-semibold text-sm">{price.toLocaleString()} VNĐ</p>
        )}
      </div>

      
      <div className="flex my-2">
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} className={index < rating ? "text-yellow-500" : "text-gray-300"} />
        ))}
      </div>

      
      <div className="flex justify-between items-center mt-4">
        
        <button className="flex items-center">
          <FaHeart className={isFavorite ? "text-red-500" : "text-gray-400"} size={20} />
        </button>

        
        <button className="bg-blue-500 text-white p-2 rounded-full">
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
