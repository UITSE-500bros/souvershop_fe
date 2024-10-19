import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import CartPage from "./screens/CartPage";
import CategoryPage from "./screens/CategoryPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router> 
      <header className="align-top justify-center text-center text-2xl">
      </header>
      
      <div>
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/cart" element={<CartPage />} /> 
          <Route path="/category" element={<CategoryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;