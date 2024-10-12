import React from "react";
import Header from "../components/Header";
import Button from "@mui/material/Button";
import ReviewCard from "../components/ReviewCard";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom"; 

const Home = () => {
  return (
    <div>
      <div>
        <Header text="Đăng ký và nhận giảm giá 20% cho đơn hàng đầu tiên của bạn. Đăng ký ngay" />
      </div>
      <Button variant="outlined" >
        Default
        
      </Button>

      <Link to="/cart">
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
          Xem Giỏ Hàng
        </button>
      </Link>
      <div className="my-4 flex flex-wrap justify-center gap-4"> 
        <ProductCard
          imageUrl="https://cdn.ready-market.com.tw/24cfa4d4/Templates/pic/m/img_product_3462_20140903175702-1256-9615.jpg?v=c58ca81e"
          name="Móc khóa"
          price={250000}
          rating={4}
        />
        </div>


      <div className="my-4"> 
        <ReviewCard
          name="Minh Lộc"
          review="Là người luôn tìm kiếm những món đồ thời trang độc đáo, tôi rất vui khi tình cờ biết đến Shop.co. Lựa chọn quần áo ở đây không chỉ đa dạng mà còn bắt kịp xu hướng mới nhất."
          rating={5}
        />
      </div>
    
      
    </div>
  );
};

export default Home;
