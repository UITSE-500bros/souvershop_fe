
import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchBar from "./SearchBar";
import DiscountBanner from "./DiscountBanner";


const Header = () => {
  return (
    <div className=" sticky top-0 left-0 z-10 w-full">
      <DiscountBanner />
     
      <AppBar position="sticky" sx={{ width: '100%', backgroundColor: '#F8F2E5' }}>
        <Toolbar >
          <Typography className=" text-black font-bold px-5" variant="h4" component="div" >
            SouverShop  
          </Typography>
          <Typography variant="body1" component="div" sx={{paddingRight:5  }} color="red">
            Sale up to 40%
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <SearchBar />
          </Box>
          <IconButton className="bg-black">
            <ShoppingCartOutlinedIcon />
          </IconButton>
          <IconButton className="bg-black">
            <FavoriteBorderOutlinedIcon />
          </IconButton>
          <IconButton className="bg-black">
            <AccountCircleOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;