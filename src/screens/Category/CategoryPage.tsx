import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { RiFilterLine } from "react-icons/ri";
import ProductCard from "../../components/ProductCard";
import { getAllProducts } from "./service/category.service";
import { Loading } from "@/components/Loading";
import { Product } from "@/models/Product";

const CategoryPage: React.FC = () => {
  const [priceRange, setPriceRange] = useState(1000000);
  const [products, setProducts] = useState<Product[]>([]);

  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange(Number(e.target.value));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllProducts();
      if (!products) return;
      setProducts(products);
    };
    fetchProducts();
    console.log(products);
  }, [products]);

  if (!products) {
    return <Loading />;
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#F8F2E5]">
      <div className="my-4 flex items-center text-sm text-gray-600">
        Trang chủ <FaChevronRight className="mx-2 inline-block" /> Truyền thống
      </div>

      <div className="mb-6 w-full rounded-md bg-gray-100 p-5">
        <div className="flex justify-end">
          <button className="flex items-center space-x-2 rounded-md bg-white px-4 py-2 text-lg font-semibold text-gray-700 shadow-md">
            <RiFilterLine className="text-2xl" />
            <span>Bộ lọc</span>
          </button>
        </div>
      </div>

      {/* Phần sản phẩm */}
      <div className="flex-grow">
        <h2 className="ml-4 text-2xl font-bold">Truyền thống</h2>

        <div className="grid w-full grid-cols-4 gap-1 p-2">
          {products.map((product) => {
            return (
              <ProductCard
              id={product.product_id}
                key={product.product_id}
                name={product.product_name}
                price={product.product_selling_price}
                imageUrl={product.product_image[0]}
                rating={
                  product.average_rating === null ? 0 : product.average_rating
                }
                isFavorite={false}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
