import React from "react";
import { AppBar, Toolbar, TextField, Typography, Box } from "@mui/material";
import SearchBar from "./SearchBar";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Header = () => {
  return (
    <div className="flex w-[100%] flex-row items-center justify-center p-[40px] gap-10 relative">
      <div>SouverShop</div>
      <div>Sale up to 40%</div>
      <div >
        <SearchBar />
      </div>
      <div>
        <ShoppingCartOutlinedIcon />
      </div>
      <div>
        <FavoriteBorderOutlinedIcon />
      </div>
      <div>
        <AccountCircleOutlinedIcon />
      </div>
    </div>
  );
};
export default Header;
