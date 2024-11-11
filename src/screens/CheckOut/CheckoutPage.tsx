import React, { useState } from "react";
import ShippingOptions from "../../components/ShippingOptions";
import PaymentDetails from "../../components/PaymentDetails";
import OrderSummaryCard from "../../components/OrderSummaryCard";
import ConfirmationButton from "../../components/ConfirmationButton";
import { Container } from "@mui/material";

const CheckoutPage: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>("creditCard");
  const [shippingMethod, setShippingMethod] = useState<string>("standard");

  const subtotal = 100000;
  const discount = 20000;

  const shipping = shippingMethod === "standard" ? 20000 : 50000;
  const total = subtotal - discount + shipping;

  const handleConfirm = () => {
    alert("Đơn hàng đã được xác nhận!");
  };

  return (
    <Container maxWidth="md" style={{ padding: "20px" }}>
      <h1>Trang Thanh Toán</h1>
      <ShippingOptions
        shippingMethod={shippingMethod}
        setShippingMethod={setShippingMethod}
      />
      <PaymentDetails
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
      />
      <OrderSummaryCard
        subtotal={subtotal}
        discount={discount}
        shipping={shipping}
        total={total}
      />
      <ConfirmationButton onConfirm={handleConfirm} />
    </Container>
  );
};

export default CheckoutPage;
