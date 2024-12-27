import { useSidebar } from "@/components/ui/sidebar";
import { IconButton, TextField } from "@mui/material";
import { Search, Bell, User, MenuIcon } from "lucide-react";
import React from "react";
import { sIsSidebarOpen } from "../AdminSidebar/stores/AdminSidebarStores";

export default function AdminAppBar() {
  const { toggleSidebar } = useSidebar();
  const handleToggleSidebar = () => {
    toggleSidebar();
    sIsSidebarOpen.set(!sIsSidebarOpen.value);
    console.log(sIsSidebarOpen.value);
    
  }
  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between bg-white py-[20px] pr-[32px]">
      <div className="flex items-end">
        <IconButton onClick={handleToggleSidebar} className="mr-5">
          <MenuIcon size={30} />
        </IconButton>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          sx={{ width: "700px" }}
          size="small"
          slotProps={{
            input: {
              startAdornment: <Search size={24} />,
            },
          }}
        />
      </div>
      <div className="flex flex-row items-center justify-center gap-5">
        <IconButton>
          <Bell size={24} />
        </IconButton>
        <IconButton>
          <User size={24} />
        </IconButton>
      </div>
    </div>
  );
}
