import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { RiFilterLine } from "react-icons/ri";  
import ProductCard from "../../components/ProductCard";

const CategoryPage: React.FC = () => {
  const [priceRange, setPriceRange] = useState(1000000);

  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange(Number(e.target.value));
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F2E5]">
      
      <div className="flex-grow">
        <div className="my-4 flex items-center text-sm text-gray-600">
          Trang chủ <FaChevronRight className="mx-2 inline-block" /> Truyền thống
        </div>

        <div className="flex items-start">
          
          <div className="w-1/4 rounded-md bg-gray-100 p-4 space-y-4">
            <div className="flex items-center justify-between">
              <p className="font-semibold">Bộ lọc</p>
              <RiFilterLine className="text-xl" />
            </div>

            <div className="flex justify-center">
              <label htmlFor="price-range" className="text-sm">
                Giá: 0 đ - {priceRange.toLocaleString()} đ
              </label>
            </div>
            <div className="flex items-center whitespace-nowrap">
              <span>0 đ</span>
              <input
                id="price-range"
                type="range"
                min="0"
                max="1000000"
                value={priceRange}
                onChange={handlePriceRangeChange}
                className="mx-4 w-full"
              />
              <span>1,000,000 đ</span>
            </div>
            <div className="mt-4 flex justify-center">
              <button className="rounded-[62px] bg-[#DBAD34] px-4 py-2 text-white">
                Áp dụng bộ lọc
              </button>
            </div>
          </div>

          {/* Phần sản phẩm */}
          <div className="flex-grow">
            <h2 className="ml-4 text-2xl font-bold">Truyền thống</h2>

            <div className="grid w-full grid-cols-3 gap-1 p-2">
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
    </div>
  );
};

export default CategoryPage;
