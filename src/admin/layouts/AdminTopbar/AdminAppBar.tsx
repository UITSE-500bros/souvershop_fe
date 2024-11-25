import { IconButton, TextField } from "@mui/material";
import { Search, Bell, User } from "lucide-react";
import React from "react";

export default function AdminAppBar() {
  return (
    <div className="sticky bg-white top-0 z-10 flex flex-row items-center justify-between py-[20px] pl-[48px] pr-[32px]">
      <div className="flex items-center justify-center">
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          sx={{ width: "700px" }}
          InputProps={{
            startAdornment: (
              <IconButton>
                <Search size={24} />
              </IconButton>
            ),
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
