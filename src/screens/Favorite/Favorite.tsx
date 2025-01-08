import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import useFavoriteStore from "./store/FavoriteStore";
import useCartStore from "../Cart/store/CartStore";

export interface ProductCardProps {
  name: string;
  price: number;
  discountPrice?: number;
  imageUrl: string;
  rating: number;
  isFavorite?: boolean;
  id: string;
}

const Favorite: React.FC = () => {
  const favoriteItems = useFavoriteStore((state) => state.favoriteItems);
  const addToCart = useCartStore((state) => state.addToCart);

  const handleRemoveFromFavorites = (id: string) => {
    useFavoriteStore.getState().removeFromFavorite(id);
  };

  return (
    <div className="favorite-page container mx-auto p-4">
      <h1 className="mb-6 text-center text-2xl font-semibold text-gray-700">
        Danh sách yêu thích của bạn
      </h1>

      <div className="favorite-items grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {favoriteItems.map((item) => (
          <div
            key={item.product_id}
            className="favorite-item flex flex-col items-center rounded-lg border border-gray-300 bg-[#F8F2E5] p-4 shadow-sm transition-transform hover:scale-105"
          >
            <Link to={`/product/${item.product_id}`}>
              <img
                src={item.product_image[0]}
                alt={item.product_name}
                className="mb-4 h-56 w-56 rounded-lg object-cover transition-transform hover:scale-110"
              />
            </Link>

            <div className="product-info text-center">
              <h3 className="mb-2 text-lg font-semibold">
                {item.product_name}
              </h3>
              {/* <div className="my-2 flex justify-center">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={index < item.pr ? "text-yellow-500" : "text-gray-300"}
                  />
                ))}
              </div> */}

              <p className="text-gray-500">
                {item.product_selling_price
                  ? item.product_selling_price.toLocaleString()
                  : item.product_selling_price.toLocaleString()}{" "}
                đ
              </p>
            </div>

            <div className="mt-4 flex items-center space-x-3">
              <button
                className="flex items-center rounded-lg border border-gray-300 px-2 py-1 text-red-500 transition hover:bg-red-100"
                onClick={() => handleRemoveFromFavorites(item.product_id)}
              >
                <DeleteOutlineIcon fontSize="small" />
                <span className="ml-1 text-sm">Xóa khỏi danh sách</span>
              </button>

              <button
                onClick={() => {
                  addToCart(item);
                }}
                className="flex items-center rounded-lg border border-gray-300 px-2 py-1 text-blue-500 transition hover:bg-blue-100"
              >
                <ShoppingCartIcon fontSize="small" />
                <span className="ml-1 text-sm">Thêm vào giỏ hàng</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorite;
