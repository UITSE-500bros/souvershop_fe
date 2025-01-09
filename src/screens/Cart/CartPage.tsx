import React, { useEffect, useState } from "react";
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
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";
import { checkoutVNpayApi } from "./service/Cart.service";
import LoadingDialog from "@/admin/components/LoadingDialog";
import axiosInstance from "@/services/AxiosInstance";

const CartPage: React.FC = () => {
  const [shippingMethod, setShippingMethod] = useState<string>("standard");
  const [paymentMethod, setPaymentMethod] = useState<string>("VNpay");
  const cartItems = useCartStore((state) => state.cartItems);
  const [loading, setLoading] = useState(false);
  const [discounts, setDiscounts] = useState<
    { id: string; discount_name: string; discount_value: number }[]
  >([]);
  const [selectedDiscountId, setSelectedDiscountId] = useState<string>("");
  const [discountValue, setDiscountValue] = useState<number>(0);

  const [level, setLevel] = useState(0);
  const shipping = 20000;
  const [memberDiscount, setMemberDiscount] = useState(0);
  

  const calculateSubtotal = (items: typeof cartItems) =>
    items.reduce(
      (sum, item) => sum + item.product_selling_price * item.quantity,
      0,
    );

  const subtotal = calculateSubtotal(cartItems);
  const discountQuantity = subtotal*discountValue/100;
  const total = subtotal + shipping - discountQuantity - memberDiscount;

  const fetchDiscounts = async () => {
    try {
      const response = await axiosInstance.get("/customer/discounts");
      setDiscounts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchLevel = async () => {
    try {
      const response = await axiosInstance.get("customer/level");
      setLevel(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDiscountChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedId = event.target.value as string;
    setSelectedDiscountId(selectedId);

    // Find the discount value associated with the selected ID
    const selectedDiscountObj = discounts.find((d) => d.id === selectedId);
    setDiscountValue(selectedDiscountObj ? selectedDiscountObj.discount_value : 0);
  };

  const handleCheckout = () => {
    if (paymentMethod === "cod") {
      toast.success("Đặt hàng thành công!");
    } else {
      checkoutVNpayApi({
        amount: total,
        productList: cartItems.map((item) => ({
          product_id: item.product_id,
          product_total: item.total,
          quantity: item.quantity,
        })),
      })
        .then((res) => {
          window.location.href = res;
        })
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    fetchDiscounts();
    fetchLevel();
  }, []);

  return (
    <div className="flex justify-evenly space-x-6 p-10">
      <LoadingDialog open={loading} />
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

      {/* Payment information */}
      <div className="bg-white-100 m-5 rounded-lg p-4">
        <OrderSummaryCard
          subtotal={subtotal}
          shipping={shipping}
          total={total}
          discount={discountQuantity}
          memberDiscount={memberDiscount}
        />

        {/* Shipping options */}
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

        {/* Payment details */}
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

        {/* Discount selection */}
        <div style={{ marginTop: "24px" }}>
          <Box display="flex" flexDirection="column" gap={3}>
            <Box display="flex" alignItems="center">
              <FormControl
                sx={{
                  width: 326,
                  backgroundColor: "#efefef",
                  borderRadius: "62px",
                  padding: "8px 16px",
                }}
              >
                <InputLabel>Mã khuyến mãi</InputLabel>
                <Select
                  value={selectedDiscountId}
                  onChange={handleDiscountChange}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Chọn mã khuyến mãi
                  </MenuItem>
                  {discounts.map((discount) => (
                    <MenuItem key={discount.id} value={discount.id}>
                      {discount.discount_name} - Giảm {discount.discount_value}%
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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
