
import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchBar from "./SearchBar";
import DiscountBanner from "./DiscountBanner";


const Header = () => {
  return (
    <div className="fixed top-0 left-0 z-10">
      <DiscountBanner />
     
      <AppBar position="static" sx={{ width: '100%',  }} color="transparent">
        <Toolbar >
          <Typography className=" font-bold px-5" variant="h4" component="div" sx={{ }}>
            SouverShop  
          </Typography>
          <Typography variant="body1" component="div" sx={{paddingRight:5  }} color="red">
            Sale up to 40%
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <SearchBar />
          </Box>
          <IconButton color="inherit">
            <ShoppingCartOutlinedIcon />
          </IconButton>
          <IconButton color="inherit">
            <FavoriteBorderOutlinedIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;