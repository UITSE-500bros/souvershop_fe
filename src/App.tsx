import { Route, Routes } from "react-router-dom";

import CategoryPage from "./screens/Category/CategoryPage";
import CheckoutPage from "./screens/CheckOut/CheckoutPage";
import Home from "./screens/Home";

import Cart from "./screens/Cart";
import Profile from "./screens/CustomerInfo";
import Headers from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import ProductDetail from "./screens/ProductDetail";
import MainRoute from "./routes/MainRoute";

function App() {
  return <MainRoute />;
}

export default App;
