import React, { useState } from "react";
import Header from "../components/Header/Header";

import { FaShoppingCart, FaUser, FaChevronRight } from "react-icons/fa";
import ProductCard from "../components/ProductCard";

const CategoryPage: React.FC = () => {
  const [priceRange, setPriceRange] = useState(1000000); 

  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange(Number(e.target.value));
  };

  return (
    <div>
      
      <Header  />

      <div className="pt-12">
        <div className="flex justify-between items-center bg-gray-200 p-4">
          <h1 className="text-2xl font-bold">SouverShop</h1>
          <nav className="flex space-x-4">
            <div className="cursor-pointer hover:text-blue-500 flex items-center">
              <span>Cửa hàng</span>
              <span className="ml-1 transform rotate-90">{'>'}</span>
            </div>
            <div className="cursor-pointer hover:text-blue-500">Giảm giá</div>
            <div className="cursor-pointer hover:text-blue-500">Hàng mới</div>
            <div className="cursor-pointer hover:text-blue-500">Thương hiệu</div>
          </nav>
          <div className="flex space-x-4 items-center">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="border rounded-md px-2 py-1"
            />
            <FaShoppingCart className="text-xl cursor-pointer" />
            <FaUser className="text-xl cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="my-4 text-gray-600 text-sm flex items-center">
        Trang chủ <FaChevronRight className="inline-block mx-2" /> Truyền thống
      </div>

      <div className="flex items-start mb-4">
        <div className="w-1/4 p-4 bg-gray-100 rounded-md">
          <p className="font-semibold">Bộ lọc</p>
          <label htmlFor="price-range" className="text-sm">
            Giá: 0 VNĐ - {priceRange.toLocaleString()} VNĐ
          </label>
          <div className="flex items-center">
            <span>0 VNĐ</span>
            <input
              id="price-range"
              type="range"
              min="0"
              max="1000000"
              value={priceRange}
              onChange={handlePriceRangeChange}
              className="w-full mx-4"
            />
            <span>1,000,000 VNĐ</span>
          </div>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Áp dụng bộ lọc</button>
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
