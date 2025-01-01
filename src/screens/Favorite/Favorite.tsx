import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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

const Favorite: React.FC = () => {
  const [favoriteItems, setFavoriteItems] = useState<ProductCardProps[]>([
    {
      name: "Product 1",
      price: 500000,
      discountPrice: 450000,
      imageUrl:
        "https://mysofa.vn/wp-content/uploads/2020/02/cac-mau-tranh-thac-nuoc-phong-thuy-dep-nhat-37.jpg",
      rating: 4,
      isFavorite: true,
      id: "1",
    },
    {
      name: "Product 2",
      price: 700000,
      imageUrl:
        "https://media.loveitopcdn.com/853/ao-thun-dui-nam-coc-tay-trang-3.png",
      rating: 5,
      isFavorite: true,
      id: "2",
    },
  ]);

  const handleRemoveFromFavorites = (id: string) => {
    setFavoriteItems(favoriteItems.filter((item) => item.id !== id));
  };

  return (
    <div className="favorite-page container mx-auto p-4">
      <h1 className="text-2xl font-semibold text-center mb-6 text-gray-700">
        Danh sách yêu thích của bạn
      </h1>

      <div className="favorite-items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {favoriteItems.map((item) => (
          <div
            key={item.id}
            className="favorite-item flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-sm bg-[#F8F2E5] transition-transform hover:scale-105"
          >
            <Link to={`/product/${item.id}`}>
              <img
                src={item.imageUrl}
                alt={item.name}
                className="h-56 w-56 object-cover rounded-lg mb-4 transition-transform hover:scale-110"
              />
            </Link>

            <div className="product-info text-center">
              <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
              <div className="my-2 flex justify-center">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={index < item.rating ? "text-yellow-500" : "text-gray-300"}
                  />
                ))}
              </div>

              <p className="text-gray-500">
                {item.discountPrice
                  ? item.discountPrice.toLocaleString()
                  : item.price.toLocaleString()}{" "}
                đ
              </p>
            </div>

            <div className="mt-4 flex items-center space-x-3">
              <button
                className="flex items-center text-red-500 border border-gray-300 px-2 py-1 rounded-lg hover:bg-red-100 transition"
                onClick={() => handleRemoveFromFavorites(item.id)}
              >
                <DeleteOutlineIcon fontSize="small" />
                <span className="ml-1 text-sm">Xóa khỏi danh sách</span>
              </button>

              <button className="flex items-center text-blue-500 border border-gray-300 px-2 py-1 rounded-lg hover:bg-blue-100 transition">
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
