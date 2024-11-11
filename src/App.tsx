import { Route, Routes } from "react-router-dom";

import CategoryPage from "./screens/Category/CategoryPage";
import CheckoutPage from "./screens/CheckOut/CheckoutPage";
import Home from "./screens/Home";

import Cart from "./screens/Cart";
import Profile from "./screens/Profile";
import Headers from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Category" element={<CategoryPage />} />
        <Route path="/customer" element={<Profile />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
