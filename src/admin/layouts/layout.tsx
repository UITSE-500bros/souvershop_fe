import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AdminSidebar from "./AdminSidebar";
import AdminAppBar from "./AdminTopbar/AdminAppBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarProvider defaultOpen={false}>
        <AdminSidebar />

        <main>
          <AdminAppBar />

          {children}
        </main>
      </SidebarProvider>
    </>
  );
}
