import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./screens/CartPage";
import CategoryPage from "./screens/CategoryPage";
import CheckoutPage from "./screens/CheckoutPage";
import CustomerInfoPage from "./screens/CustomerInfoPage";
import Home from "./screens/Home";
import ProductDetail from "./screens/ProductDetail";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="category" element={<CategoryPage />} />
      <Route path="/customer" element={<CustomerInfoPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export default App;
