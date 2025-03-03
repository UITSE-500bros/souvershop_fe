import React, { useState } from "react";

import { FaChevronRight } from "react-icons/fa";
import ProductCard from "../components/ProductCard";
import { Header } from "@/components";

const CategoryPage: React.FC = () => {
  const [priceRange, setPriceRange] = useState(1000000); 

  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange(Number(e.target.value));
  };

  return (
    <div className="bg-[#F8F2E5] min-h-screen">
      
      <Header  />

      

      <div className="my-4 text-gray-600 text-sm flex items-center">
        Trang chủ <FaChevronRight className="inline-block mx-2" /> Truyền thống
      </div>

      <div className="flex items-start mb-4">
        <div className="w-1/4 p-4 bg-gray-100 rounded-md">
          <p className="font-semibold">Bộ lọc</p>
          <label htmlFor="price-range" className="text-sm">
            Giá: 0 đ - {priceRange.toLocaleString()} đ
          </label>
          <div className="flex items-center">
            <span>0 đ</span>
            <input
              id="price-range"
              type="range"
              min="0"
              max="1000000"
              value={priceRange}
              onChange={handlePriceRangeChange}
              className="w-full mx-4"
            />
            <span>1,000,000 đ</span>
          </div>
          <div className="flex justify-center mt-4">
          <button className="bg-[#DBAD34] text-white px-4 py-2 rounded-[62px]">
            Áp dụng bộ lọc
          </button>
          </div>
        </div>

        <div className="flex-grow">
          <h2 className="text-2xl font-bold ml-4">Truyền thống</h2>

          <div className="w-full grid grid-cols-3 gap-2 p-4">
            <ProductCard
              imageUrl="https://cdn.ready-market.com.tw/24cfa4d4/Templates/pic/m/img_product_3462_20140903175702-1256-9615.jpg?v=c58ca81e"
              name="Móc khóa"
              price={250000}
              discountPrice={200000}
              rating={4}
            />
            <ProductCard
              imageUrl="https://mysofa.vn/wp-content/uploads/2020/02/cac-mau-tranh-thac-nuoc-phong-thuy-dep-nhat-37.jpg"
              name="Tranh Đông Hồ"
              price={500000}
              discountPrice={400000}
              rating={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
