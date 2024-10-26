import { Route, Routes } from "react-router-dom";
import Cart from "./screens/CartPage";
import CategoryPage from "./screens/CategoryPage";
import CheckoutPage from "./screens/CheckoutPage";
import CustomerInfoPage from "./screens/CustomerInfoPage";
import Home from "./screens/Home";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Category" element={<CategoryPage />} />
        <Route path="/customer" element={<CustomerInfoPage />} />
        <Route path="/checkout" element={<CheckoutPage/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
  );
}

export default App;
