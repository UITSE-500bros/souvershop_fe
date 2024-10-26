import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import CategoryPage from "./screens/CategoryPage";
import CartPage from "./screens/CartPage";
import CustomerInfoPage from "./screens/CustomerInfoPage";
import CheckoutPage from "./screens/CheckoutPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/customer-info" element={<CustomerInfoPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
