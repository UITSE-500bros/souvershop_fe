import React, { useState } from "react";
import ProductCardCart from "../../components/ProductCardCart";
import OrderSummaryCard from "../../components/OrderSummaryCard";
import PromoCodeBox from "../../components/PromoCodeBox";

import { data } from "./data";
import useCartStore from "./store/CartStore";

const CartPage: React.FC = () => {
  // const [cartItems, setCartItems] = useState(
  //   data.map((item) => ({
  //     name: item.product_name,
  //     price: item.product_selling_price,
  //     imageUrl: item.product_image[0],
  //     initialQuantity: 1,
  //     productId: item.product_id,
  //   })),
  // );
  const cartItems = useCartStore((state) => state.cartItems);
  const removeItem = useCartStore((state) => state.removeFromCart);


  const shipping = 20000;

  const calculateSubtotal = (items: typeof cartItems) =>
    items.reduce((sum, item) => sum + item.product_selling_price * item.quantity, 0);

  const subtotal = calculateSubtotal(cartItems);
  const total = subtotal + shipping;

  return (
    <div className="pl-16">
      <div className="flex space-x-6">
        <div
          className="rounded-lg bg-white p-6"
          style={{ width: "715px", height: "508px" }}
        >
          <div className="h-full space-y-6 overflow-y-auto">
            {cartItems.map((item) => (
              <ProductCardCart
              key={item.product_id}
              cartItem={item}
              />
            ))}
          </div>
        </div>
        <div
          className="bg-white-100 rounded-lg p-4"
          style={{ width: "505px", height: "458px" }}
        >
          <OrderSummaryCard
            subtotal={subtotal}
            shipping={shipping}
            total={total}
          />
          <div style={{ marginTop: "24px" }}>
            <PromoCodeBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
