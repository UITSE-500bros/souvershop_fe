
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import DiscountBanner from "./DiscountBanner";
import SearchBar from "./SearchBar";


const Header = () => {
  const navigate = useNavigate();
  return (
    <div className=" sticky top-0 left-0 z-10 w-full">
      <DiscountBanner />
     
      <AppBar position="sticky" sx={{ width: '100%', backgroundColor: '#F8F2E5' }}>
        <Toolbar >
          <Link className=" text-black font-bold text-4xl px-5" to={"/"}  >
            SouverShop  
          </Link>
          <Typography variant="body1" component="div" sx={{paddingRight:5  }} color="red">
            Sale up to 40%
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <SearchBar />
          </Box>
          <IconButton className="bg-black" onClick={() => navigate("/cart")} >
            <ShoppingCartOutlinedIcon />
          </IconButton>
          <IconButton className="bg-black" onClick={()=>navigate("/favorite")}>
            <FavoriteBorderOutlinedIcon />
          </IconButton>
          <IconButton className="bg-black" onClick={()=>navigate("/profile")}>
            <AccountCircleOutlinedIcon  />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;