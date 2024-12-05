import Home from "@/screens/Home";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import EmployeesList from "./screens/EmployeesList";

export default function AdminApp() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Home />} />
        <Route path="employees" element={<EmployeesList />} />
        {/* Add more nested routes here */}
      </Route>
    </Routes>
  );
}
