import React, { useState } from "react";
import ShippingOptions from "../components/ShippingOptions";
import PaymentDetails from "../components/PaymentDetails";
import OrderSummaryCard from "../components/OrderSummaryCard";
import ConfirmationButton from "../components/ConfirmationButton";
import { Container } from "@mui/material";
import useCartStore from "./Cart/store/CartStore";

const CheckoutPage: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>("creditCard");
  const [shippingMethod, setShippingMethod] = useState<string>("standard");

  const total = useCartStore((state) => state.total);

  const handleConfirm = () => {
    alert("Đơn hàng đã được xác nhận!");
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#785D44",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="md"
        style={{
          padding: "20px",
          backgroundColor: "#F8F2E5",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
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
         
          total={total}
        />
        <ConfirmationButton onConfirm={handleConfirm} />
      </Container>
    </div>
  );
};

export default CheckoutPage;
