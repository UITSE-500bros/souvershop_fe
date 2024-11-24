import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AdminSidebar from "./AdminSidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AdminSidebar/>
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
