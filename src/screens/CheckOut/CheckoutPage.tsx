import React, { useState } from "react";
import ShippingOptions from "../../components/ShippingOptions";
import PaymentDetails from "../../components/PaymentDetails";
import OrderSummaryCard from "../../components/OrderSummaryCard";
import ConfirmationButton from "../../components/ConfirmationButton";
import { Container } from "@mui/material";
import { useLocation } from "react-router-dom";

const CheckoutPage: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>("creditCard");
  const [shippingMethod, setShippingMethod] = useState<string>("standard");
  const location = useLocation()
  const {total,shipping,subtotal}=location.state||{total:0,shipping:0,subtotal:0}





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
        shipping={shipping}
        total={total}
      />
      <ConfirmationButton onConfirm={handleConfirm} />
    </Container>
  );
};

export default CheckoutPage;
