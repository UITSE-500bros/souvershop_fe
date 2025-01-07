import React, { useState } from "react";
import OrderSummaryCard from "../../components/OrderSummaryCard";
import ProductCardCart from "../../components/ProductCardCart";

import useCartStore from "./store/CartStore";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  InputBase,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";
import { checkoutVNpayApi } from "./service/Cart.service";

const CartPage: React.FC = () => {

  const [shippingMethod, setShippingMethod] = useState<string>("standard");
  const [paymentMethod, setPaymentMethod] = useState<string>("VNpay");
  const cartItems = useCartStore((state) => state.cartItems);

  const shipping = 20000;

  const calculateSubtotal = (items: typeof cartItems) =>
    items.reduce(
      (sum, item) => sum + item.product_selling_price * item.quantity,
      0,
    );

  const subtotal = calculateSubtotal(cartItems);
  const total = subtotal + shipping;

  const handleCheckout = () => {
    if (paymentMethod === "cod") {
      toast.success("Đăt hàng thành công!");
    } else {
      checkoutVNpayApi({
        amount: total,
        productList: cartItems.map((item) => {
          return {
            product_id: item.product_id,
            product_total: item.total,
            quantity: item.quantity,
          };
        }),
      })
        .then((res) => {
          window.location.href = res;
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="flex justify-evenly space-x-6 p-10">
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
      <div className="bg-white-100 m-5 rounded-lg p-4">
        <OrderSummaryCard
          subtotal={subtotal}
          shipping={shipping}
          total={total}
        />

        {/* shipping options */}
        <div style={{ padding: "20px" }}>
          <Typography variant="h4" gutterBottom>
            Lựa Chọn Vận Chuyển
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup
              value={shippingMethod}
              onChange={(e) => setShippingMethod(e.target.value)}
            >
              <FormControlLabel
                value="standard"
                control={<Radio />}
                label="Giao hàng tiêu chuẩn (20,000 đ)"
              />
            </RadioGroup>
          </FormControl>
        </div>

        {/* payment details */}
        <div style={{ padding: "20px" }}>
          <Typography variant="h4" gutterBottom>
            Chi Tiết Thanh Toán
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <FormControlLabel
                value="VNpay"
                control={<Radio />}
                label="VNpay"
              />
              <FormControlLabel
                value="cod"
                control={<Radio />}
                label="Thanh toán khi nhận hàng"
              />
            </RadioGroup>
          </FormControl>
        </div>

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
              onClick={handleCheckout}
            >
              Thanh toán
              <ArrowForwardIcon style={{ width: 24, height: 24 }} />
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
