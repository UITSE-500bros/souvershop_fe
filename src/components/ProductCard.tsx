import { Product } from "@/models/Product";
import useCartStore from "@/screens/Cart/store/CartStore";
import useFavoriteStore from "@/screens/Favorite/store/FavoriteStore";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const addToFavorite = useFavoriteStore((state) => state.addToFavorite);
  const removeFromFavorite = useFavoriteStore(
    (state) => state.removeFromFavorite,
  );
  const favoriteItems = useFavoriteStore((state) => state.favoriteItems);
  const isFavorited = favoriteItems.some(
    (item) => item.product_id === product.product_id,
  );

  const handleFavoriteClick = () => {
    console.log("favorite clicked", isFavorited);
    if (isFavorited) {
      removeFromFavorite(product.product_id);
    } else {
      addToFavorite(product);
    }
  };

  return (
    <div className="product-card relative my-4 h-[452px] w-[300px] rounded-[20px] border-4 border-black bg-[#F8F2E5] p-4 shadow-md">
      <div className="relative">
        <Link to={`/product/${product.product_id}`}>
          <img
            src={product.product_image[0]}
            alt={product.product_name}
            className="h-[266px] w-[270px] rounded object-cover"
          />
        </Link>
      </div>

      <div className="product-info mt-2 flex flex-col">
        <h2 className="flex items-center justify-between text-sm font-bold">
          <Link to={`/product/${product.product_id}`}>
            <span className="line-clamp-2">{product.product_name}</span>
          </Link>

          {/* {discountPrice && (
            <span className="rounded-[62px] bg-[#FFB2B2] px-2 py-1 text-xs text-red-600">
              ~{discountPercentage}%
            </span>
          )} */}
        </h2>
      </div>

      {/* <div className="my-2 flex" style={{ width: "114px", height: "19px" }}>
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={index < rating ? "text-yellow-500" : "text-gray-300"}
          />
        ))}
      </div> */}

      <div className="absolute bottom-16 left-4 right-4 flex items-center justify-between">
        {/* {discountPrice && (
          <p className="text-black-500 text-sm font-semibold">
            {discountPrice.toLocaleString()} đ
          </p>
        )} */}
        <p className="text-sm text-black-500 ">
          {product.product_selling_price.toLocaleString()} đ
        </p>
      </div>

      <div className="absolute bottom-4 left-4">
        <button
          onClick={handleFavoriteClick}
          className="flex h-10 w-10 items-center justify-center rounded-full p-1 transition-transform duration-200 hover:scale-105"
        >
          {isFavorited ? (
            <FavoriteIcon fontSize="large" className="text-red-500" />
          ) : (
            <FavoriteBorderOutlinedIcon
              className={`transition-colors duration-200`}
              fontSize="large"
            
            />
          )}
        </button>
      </div>

      <div className="absolute bottom-4 right-4">
        <button
          onClick={() => {
            addToCart(product);
          }}
          className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-black bg-white p-2 text-black transition-transform duration-200 hover:scale-105"
        >
          <FaPlus className="text-black" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
