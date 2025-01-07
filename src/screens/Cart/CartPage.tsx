import React, { useState } from "react";
import ProductCardCart from "../../components/ProductCardCart";
import OrderSummaryCard from "../../components/OrderSummaryCard";

import useCartStore from "./store/CartStore";

import { Box, Typography, InputBase, Button } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import ShippingOptions from "@/components/ShippingOptions";
import PaymentDetails from "@/components/PaymentDetails";

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
    items.reduce(
      (sum, item) => sum + item.product_selling_price * item.quantity,
      0,
    );

  const subtotal = calculateSubtotal(cartItems);
  const total = subtotal + shipping;

  const navigate = useNavigate();
  const handleGoToCheckout = () => {
    navigate("/checkout", {
      state: {
        total,
        shipping,
        subtotal,
      },
    });
  };

  return (
    <div className="pl-16">
      <div className="flex space-x-6">
        <div
          className="rounded-lg bg-white p-6"
          style={{ width: "715px", height: "508px" }}
        >
          <div className="h-full space-y-6 overflow-y-auto">
            {cartItems.map((item) => (
              <ProductCardCart key={item.product_id} cartItem={item} />
            ))}
          </div>
        </div>

        {/* payment info mation */}
        <div
          className="bg-white-100 m-5 rounded-lg p-4"
          style={{ width: "505px", height: "458px" }}
        >
          <OrderSummaryCard
            subtotal={subtotal}
            shipping={shipping}
            total={total}
          />
          <ShippingOptions />
          <PaymentDetails />
          <div style={{ marginTop: "24px" }}>
            <Box display="flex" flexDirection="column" gap={3}>
              <Box display="flex" alignItems="center">
                <Box
                  display="flex"
                  alignItems="center"
                  gap={1}
                  px={2}
                  py={1}
                  bgcolor="#efefef"
                  borderRadius="62px"
                  overflow="hidden"
                  width={326}
                  height={48}
                >
                  <LocalOfferIcon
                    style={{ width: 24, height: 24, color: "gray" }}
                  />
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    style={{
                      fontFamily: "Inter-Regular",
                    }}
                  ></Typography>
                  <InputBase
                    placeholder="Nhập mã khuyến mãi"
                    style={{
                      width: "100%",
                      height: "100%",
                      padding: "8px",
                      borderRadius: "8px",
                      backgroundColor: "#efefef",
                    }}
                  />
                </Box>

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "62px",
                    padding: "10px 20px",
                    marginLeft: "12px",
                    width: "119px",
                    height: "48px",
                    "&:hover": {
                      backgroundColor: "#333",
                    },
                  }}
                >
                  Áp dụng
                </Button>
              </Box>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "30px",
                  padding: "10px 20px",
                  width: "457px",
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  "&:hover": {
                    backgroundColor: "#333",
                  },
                }}
                onClick={handleGoToCheckout}
              >
                Thanh toán
                <ArrowForwardIcon style={{ width: 24, height: 24 }} />
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
