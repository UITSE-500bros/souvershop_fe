import React from "react";
import { FaStar, FaPlus } from "react-icons/fa";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";

export interface ProductCardProps {
  name: string;
  price: number;
  discountPrice?: number;
  imageUrl: string;
  rating: number;
  isFavorite?: boolean;
  id: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  discountPrice,
  imageUrl,
  rating,
  isFavorite = false,
  id,
}) => {
  const discountPercentage = discountPrice
    ? Math.round(((price - discountPrice) / price) * 100)
    : 0;

  return (
    <div className="product-card relative my-4 h-[452px] w-[300px] rounded-[20px] border-4 border-black bg-[#F8F2E5] p-4 shadow-md">
      <div className="relative">
        <Link to={`/product/${id}`}>
          <img
            src={imageUrl}
            alt={name}
            className="h-[266px] w-[270px] rounded object-cover"
          />
        </Link>
      </div>

      <div className="product-info mt-2 flex flex-col">
        <h2 className="flex items-center justify-between text-sm font-bold">
          <Link to={`/product/${id}`}>
            <span className="line-clamp-2">{name}</span>
          </Link>

          {discountPrice && (
            <span className="rounded-[62px] bg-[#FFB2B2] px-2 py-1 text-xs text-red-600">
              ~{discountPercentage}%
            </span>
          )}
        </h2>
      </div>

      <div className="my-2 flex" style={{ width: "114px", height: "19px" }}>
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={index < rating ? "text-yellow-500" : "text-gray-300"}
          />
        ))}
      </div>

      <div className="absolute bottom-16 left-4 right-4 flex items-center justify-between">
        {discountPrice && (
          <p className="text-black-500 text-sm font-semibold">
            {discountPrice.toLocaleString()} đ
          </p>
        )}
        <p className="text-sm text-gray-500 line-through">
          {price.toLocaleString()} đ
        </p>
      </div>

      <div className="absolute bottom-4 left-4">
        <button className="flex h-10 w-10 items-center justify-center rounded-full p-1 transition-transform duration-200 hover:scale-105">
          <FavoriteBorderOutlinedIcon
            className={`${isFavorite ? "text-red-500" : "text-black"} transition-colors duration-200`}
            fontSize="large"
            sx={{ color: "black" }}
          />
        </button>
      </div>

      <div className="absolute bottom-4 right-4">
        <button className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-black bg-white p-2 text-black transition-transform duration-200 hover:scale-105">
          <FaPlus className="text-black" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
