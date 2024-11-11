import { Route, Routes } from "react-router-dom";

import CategoryPage from "./screens/Category/CategoryPage";
import CheckoutPage from "./screens/CheckOut/CheckoutPage";
import Home from "./screens/Home";

import Cart from "./screens/Cart";
import Profile from "./screens/Profile";
import Headers from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./screens/ProductDetail";

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="category" element={<CategoryPage />} />
        <Route path="/customer" element={<Profile />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
