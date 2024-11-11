import React from "react";
import { FaStar, FaPlus } from "react-icons/fa";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

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
  const discountPercentage = discountPrice
    ? Math.round(((price - discountPrice) / price) * 100)
    : 0;

  return (
    <div className="product-card border-4 border-black rounded-[20px] shadow-md p-4 my-4 bg-[#F8F2E5] w-[300px] h-[452px] relative">
      <div className="relative">
        <img src={imageUrl} 
        alt={name} 
        className="w-[270px] h-[266px] object-cover rounded" />
      </div>

      <div className="product-info flex flex-col mt-2">
        <h2 className="font-bold text-sm flex justify-between items-center">
          {name}
          {discountPrice && (
            <span className="bg-[#FFB2B2] text-red-600 px-2 py-1 rounded-[62px] text-xs">
              ~{discountPercentage}%
            </span>
          )}
        </h2>
      </div>

      <div className="flex my-2" style={{ width: '114px', height: '19px' }}>
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={index < rating ? "text-yellow-500" : "text-gray-300"}
          />
        ))}
      </div>

      <div className="absolute bottom-16 left-4 right-4 flex items-center gap-2">
        {discountPrice && (
          <p className="text-black-500 font-semibold text-sm" style={{ width: '103px', height: '29px' }}>
            {discountPrice.toLocaleString()} đ
          </p>
        )}
        <p className="text-gray-500 line-through text-sm" style={{ width: '116px', height: '29px' }}>
          {price.toLocaleString()} đ
        </p>
      </div>

      <div className="absolute bottom-4 left-4">
        <button className="flex items-center justify-center w-10 h-10  rounded-full p-1 transition-transform duration-200 hover:scale-105">
          <FavoriteBorderOutlinedIcon
            className={`${isFavorite ? "text-red-500" : "text-black"} transition-colors duration-200`}
            fontSize="large"
            sx={{color: "black"}}
          />
        </button>
      </div>

      <div className="absolute bottom-4 right-4">
        <button className="bg-white text-black p-2 rounded-full border-4 border-black flex items-center justify-center w-10 h-10 transition-transform duration-200 hover:scale-105">
          <FaPlus className="text-black" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
