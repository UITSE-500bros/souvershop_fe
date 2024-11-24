import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  House,
  ChartArea,
  PackagePlus,
  CircleUserRound,
  Database,
} from "lucide-react";
import React from "react";
//menu items
const items = [
  {
    title: "Trang chính",
    url: "#",
    icon: House,
  },
  {
    title: "Kho đồ",
    url: "#",
    icon: Database,
  },
  {
    title: "Thống kê",
    url: "#",
    icon: ChartArea,
  },
  {
    title: "Nhân viên",
    url: "#",
    icon: CircleUserRound,
  },

  {
    title: "Nhập hàng",
    url: "#",
    icon: PackagePlus,
  },
];

export default function AdminSidebar() {
  return (
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
                    <a href={item.url} >
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
    </Sidebar>
  );
}
