import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminAppBar from "./AdminTopbar/AdminAppBar";

export default function AdminLayout() {
  return (
    <>
      <SidebarProvider defaultOpen={false}>
        <AdminSidebar />
        <main className="w-screen">
          <AdminAppBar />

          <Outlet />
        </main>
      </SidebarProvider>
    </>
  );
}
