import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { AppBar, Box, IconButton, TextField, Toolbar } from "@mui/material";
import { Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import DiscountBanner from "./DiscountBanner";
import CategoryMenu from "./CategoryMenu";

const Header = () => {
  const navigate = useNavigate();
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
            onClick={() => {
          
                navigate("/login");
            
              
            }}
          >
            <AccountCircleOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
