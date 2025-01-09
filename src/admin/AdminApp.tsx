import { Route, Routes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import EmployeesList from "./screens/EmployeesList";
import AdminDashboard from "./screens/DashBoard";
import AddOrder from "./screens/AddOrder";

import Inventory from "./screens/Inventory";
import ProductInfo from "./screens/ProductInfo";
import Reports from "./screens/Reports";
import Orders from "./screens/Orders";
import CustomerInfoPage from "@/screens/CustomerInfo";
import Manage from "./screens/CustomerOrders/Manage";
import Discount from "./screens/Discount";

export default function AdminApp() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="employees" element={<EmployeesList />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="product/:productId" element={<ProductInfo />} />
        <Route path="product" element={<ProductInfo />} />
        <Route path="reports" element={<Reports />} />
        <Route path="orders" element={<Orders />} />
        <Route path="orders/:add-order" element={<AddOrder />} />
        <Route path="profile" element={<CustomerInfoPage />} />
        <Route path="customer-orders" element={<Manage />} />
        <Route path='discount' element ={<Discount />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  );
}
