import Home from "@/screens/Home";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import EmployeesList from "./screens/EmployeesList";
import Inventory from "./screens/Inventory";

export default function AdminApp() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Home />} />
        <Route path="employees" element={<EmployeesList />} />
        {/* Add more nested routes here */}
        <Route path="inventory" element={<Inventory/>}/>

      </Route>
    </Routes>
  );
}
