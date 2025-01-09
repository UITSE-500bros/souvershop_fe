import Discount from "@/admin/screens/Discount";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar";
import useAuthStore from "@/stores/AuthStore";

import {
  ChartArea,
  CircleUserRound,
  Database,
  House,
  LogOut,
  PackagePlus,
  Settings,
  SquarePercent,
  
} from "lucide-react";
import { useState } from "react";
//menu items
const items = [
  {
    title: "Trang chính",
    url: "/admin",
    icon: House,
  },
  {
    title: "Kho đồ",
    url: "/admin/inventory",
    icon: Database,
  },
  {
    title: "Thống kê",
    url: "/admin/reports",
    icon: ChartArea,
  },
  {
    title: "Nhân viên",
    url: "/admin/employees",
    icon: CircleUserRound,
  },

  {
    title: "Nhập hàng",
    url: "/admin/orders",
    icon: PackagePlus,
  },
  {
    title: "Đơn đặt hàng",
    url: "/admin/customer-orders",
    icon: PackagePlus,
  },
  {
    title: "Khuyến mãi",
    url: "/admin/discount",
    icon: SquarePercent,
  }
 
];

export default function AdminSidebar() {
  const {logout}=useAuthStore();
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  }
  const closeDialog = () => {
    setOpen(false);
  }
  const handleSaveDiscount = (data: {
    eventName: string;
    value: string;
    startDate: string;
    endDate: string;
  }) => {
    console.log('Discount Data:', data);
    closeDialog();
  };
  return (
    <>
    <Sidebar>
      {/* Sidebar header */}
      <SidebarHeader>
        <div className="text-center font-['Inter'] text-3xl font-semibold leading-[30px] text-[#156fee]">
          SouverShop
        </div>
      </SidebarHeader>

      {/* Sidebar content */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className="h-12" asChild>
                    <a href={item.url}>
                      <item.icon className="h-8 w-8" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Sidebar footer */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <Settings className="h-8 w-8" />
                <span>Cài đặt</span>
              </a>
            </SidebarMenuButton>

            <SidebarMenuButton onClick={logout} asChild>
              <a href="#">
                <LogOut className="h-8 w-8" />
                <span>Đăng xuất</span>
              </a>
            </SidebarMenuButton>
            <SidebarMenuButton onClick={openDialog} asChild>
              <a href="#">
                <SquarePercent className="h-8 w-8" />
                <span>Khuyến mãi</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
    </>
  );
}
