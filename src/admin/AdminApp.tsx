import Home from "@/screens/Home";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import EmployeesList from "./screens/EmployeesList";
import Inventory from "./screens/Inventory";
import ProductInfo from "./screens/ProductInfo";

export default function AdminApp() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Home />} />
        <Route path="employees" element={<EmployeesList />} />
        {/* Add more nested routes here */}
        <Route path="inventory" element={<Inventory/>}/>
        <Route path="inventory/product-info" element={<ProductInfo/>}/>

      </Route>
    </Routes>
  );
}
