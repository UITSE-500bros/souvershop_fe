import Home from "@/screens/Home";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import EmployeesList from "./screens/EmployeesList";
import AdminDashboard from "./screens/DashBoard";
import Order from "./screens/Orders/Orders";
import Orders from "./screens/Orders";
import Inventory from "./screens/Inventory";
import ProductInfo from "./screens/ProductInfo";

export default function AdminApp() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="employees" element={<EmployeesList />} />
        {/* Add more nested routes here */}
        <Route path="inventory" element={<Inventory />}/>
          
        <Route path="product-info" element={<ProductInfo/>}/>
        <Route path="Orders" element={<Orders/>}/>
      </Route>
    </Routes>
  );
}
