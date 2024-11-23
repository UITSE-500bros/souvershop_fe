import { Footer, Header } from "@/components";
import Layout from "@/Layout";
import Cart from "@/screens/Cart";
import CategoryPage from "@/screens/Category";
import CheckoutPage from "@/screens/CheckOut";
import CustomerInfoPage from "@/screens/CustomerInfo";
import Favorite from "@/screens/Favorite";
import ForgotPassword from "@/screens/ForgotPassword/ForgotPassword";
import Home from "@/screens/Home";
import NewPassword from "@/screens/NewPassword";
import ProductDetail from "@/screens/ProductDetail";
import { Route, Routes } from "react-router-dom";

export default function MainRoute() {
  return (
    <>
    
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="category" element={<CategoryPage />} />
          <Route path="/customer-info" element={<CustomerInfoPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/favorite" element={<Favorite />} />
        </Route>

        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    
    </>
  );
}
