import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Cart from "./screens/CartPage";
import CategoryPage from "./screens/CategoryPage";
import CustomerInfoPage from "./screens/CustomerInfoPage";
import CheckoutPage from "./screens/CheckoutPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Category" element={<CategoryPage />} />
        <Route path="/customer" element={<CustomerInfoPage />} />
        <Route path="/checkout" element={<CheckoutPage/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
