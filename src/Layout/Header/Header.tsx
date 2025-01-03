import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { AppBar, Box, IconButton, Menu, MenuItem, TextField, Toolbar } from "@mui/material";
import { Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import DiscountBanner from "./DiscountBanner";
import CategoryMenu from "./CategoryMenu";
import { useState } from "react";
import useAuthStore from "@/stores/AuthStore";

const Header = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null|HTMLElement>(null);

  const handleMenuOpen=(event: React.MouseEvent<HTMLButtonElement>)=> {
    setAnchorEl(event.currentTarget);
  };
  const logout= useAuthStore(state=>state.logout);

  const handleClose=()=>{
    setAnchorEl(null);
  };

  const handleProfile=()=>{
    navigate("/customer-info");
    handleClose();
  };

  const handleLogout=()=>{
    logout();
    navigate("/login");
    handleClose();
  };


  return (
    <div className="sticky left-0 top-0 z-10 w-full">
      <DiscountBanner />

      <AppBar
        position="sticky"
        sx={{ width: "100%", backgroundColor: "#F8F2E5", gap: "10px" }}
      >
        <Toolbar>
          <Link className="px-5 text-4xl font-bold text-black" to={"/"}>
            SouverShop
          </Link>
          <CategoryMenu />
          <Box sx={{ flexGrow: 1 }}>
            <TextField
              id="outlined-basic"
              label="Tìm kiếm sản phẩm"
              variant="outlined"
              size="small"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "50px", // Adjust the border radius here
                },
              }}
              slotProps={{
                input: {
                  startAdornment: <Search size={24} className="mr-3" />,
                },
              }}
            />
          </Box>
          <IconButton className="bg-black" onClick={() => navigate("/cart")}>
            <ShoppingCartOutlinedIcon />
          </IconButton>
          <IconButton
            className="bg-black"
            onClick={() => navigate("/favorite")}
          >
            <FavoriteBorderOutlinedIcon />
          </IconButton>


          <IconButton
            className="bg-black"
            onClick={handleMenuOpen}
          >
            <AccountCircleOutlinedIcon />
          </IconButton>

          <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          >
            <MenuItem onClick={handleProfile}>Hồ sơ</MenuItem>
            <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
