import React, { useState } from "react";
import Header from "../components/Header";
import ProductCardCart from "../components/ProductCardCart";

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

  return (
    <div>
      <Header text="Your Cart" />
      <div className="my-4 flex flex-col items-center gap-4"> 
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
  );
};

export default CartPage;
