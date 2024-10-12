import React from "react";
import Header from "../components/Header";
import ProductCardCart from "../components/ProductCardCart"; 

const CartPage: React.FC = () => {
  return (
    <div>
      <Header text="Your Cart" />
      <div className="my-4 flex flex-wrap justify-center gap-4"> 
        <ProductCardCart
          name="Tranh Đông Hồ"
          price={250000}
          imageUrl="https://mysofa.vn/wp-content/uploads/2020/02/cac-mau-tranh-thac-nuoc-phong-thuy-dep-nhat-37.jpg"
          size="M"
          color="Đen"
        />
        <ProductCardCart
          name="Áo Thun"
          price={500000}
          imageUrl="https://media.loveitopcdn.com/853/ao-thun-dui-nam-coc-tay-trang-3.png"
          size="L"
          color="Trắng"
        />
        
      </div>
    </div>
  );
};

export default CartPage;
