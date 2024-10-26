import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Cart from "./screens/CartPage";
import CategoryPage from "./screens/CategoryPage";

function App() {
  return (
    <Router>
    

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Category" element={<CategoryPage />} />

        <Route path="*" element={<h1>Not Found</h1>} />


      </Routes>
    </Router>
  );
}

export default App;
