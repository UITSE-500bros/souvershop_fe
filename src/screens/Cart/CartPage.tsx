import React, { useState } from "react";

import ProductCardCart from "../../components/ProductCardCart";
import OrderSummaryCard from "../../components/OrderSummaryCard";
import PromoCodeBox from "../../components/PromoCodeBox";

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState([
    {
      name: "Tranh Đông Hồ",
      price: 250000,
      imageUrl: "https://mysofa.vn/wp-content/uploads/2020/02/cac-mau-tranh-thac-nuoc-phong-thuy-dep-nhat-37.jpg",
      size: "M",
      color: "Đen",
      initialQuantity: 1,
    },
    {
      name: "Áo Thun",
      price: 500000,
      imageUrl: "https://media.loveitopcdn.com/853/ao-thun-dui-nam-coc-tay-trang-3.png",
      size: "L",
      color: "Trắng",
      initialQuantity: 1,
    },
  ]);

  const handleRemove = (index: number) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.initialQuantity, 0);
  
  const discount = subtotal * 0.2; 
  const shipping = 20000; 
  const total = subtotal - discount + shipping;

  return (
    <div>
 
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <div className="flex space-x-6"> 
        <div className="p-6 bg-white rounded-lg shadow-md" style={{ width: '715px', height: '508px' }}>
          <div className="space-y-6 overflow-y-auto h-full">
            {cartItems.map((item, index) => (
              <ProductCardCart
                key={index}
                name={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
                size={item.size}
                color={item.color}
                initialQuantity={item.initialQuantity}
                onRemove={() => handleRemove(index)}
              />
            ))}
          </div>
        </div>

        <div className="p-4 bg-white-100 rounded-lg shadow-md" style={{ width: '505px', height: '458px' }}>
          <OrderSummaryCard
            subtotal={subtotal}
            discount={discount} // Truyền giá trị giảm giá vào
            shipping={shipping}
            total={total}
          />
         <div style={{ marginTop: '24px' }}>
            <PromoCodeBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
