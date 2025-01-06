import { Route, Routes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import EmployeesList from "./screens/EmployeesList";
import AdminDashboard from "./screens/DashBoard";
import AddOrder from "./screens/AddOrder";
import Orders from "./screens/Orders";
import Inventory from "./screens/Inventory";
import ProductInfo from "./screens/ProductInfo";
import Reports from "./screens/Reports";

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
        <Route path="orders/:add-order" element={<AddOrder/>}/>
      </Route>
    </Routes>
  );
}
