import AdminApp from "@/admin/AdminApp";
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
import EmployeesList from "@/admin/screens/EmployeesList";
import Order from "@/admin/screens/Orders";
import { Route, Routes } from "react-router-dom";
import Login from "@/screens/Login";
import SignUp from "@/screens/SignUp/SignUp";
import VerifyEmail from "@/screens/VerifyEmail";


export default function MainRoute() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="category/:category" element={<CategoryPage />} />
          <Route path="/customer-info" element={<CustomerInfoPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/favorite" element={<Favorite />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-email/:accessToken" element={<VerifyEmail/>} />


        <Route path="/admin/*" element={<AdminApp />} />
        <Route path="/employees" element={<EmployeesList />} />
        <Route path="/Orders" element={<Order/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}
