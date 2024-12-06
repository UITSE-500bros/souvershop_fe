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
      <div className="my-4 flex items-center text-sm text-gray-600">
        Trang chủ <FaChevronRight className="mx-2 inline-block" /> Truyền thống
      </div>

      <div className="w-full bg-gray-100 p-4 rounded-md mb-6">
        <div className="flex items-center">
          <button className="flex items-center space-x-2 text-gray-700 font-semibold text-lg shadow-md rounded-md px-4 py-2 bg-white">
          <RiFilterLine className="text-2xl" />
            <span>Bộ lọc</span>
          </button>
        </div>
      </div>


      {/* Phần sản phẩm */}
      <div className="flex-grow">
        <h2 className="ml-4 text-2xl font-bold">Truyền thống</h2>

        <div className="grid w-full grid-cols-3 gap-2 px-2 py-4">
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
  );
};

export default CategoryPage;
