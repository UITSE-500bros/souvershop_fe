import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Badge,
  Popover,
} from "@mui/material";
import { Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import DiscountBanner from "./DiscountBanner";
import { useState } from "react";
import useAuthStore from "@/stores/AuthStore";
import ListIcon from "@mui/icons-material/List";
import useCartStore from "@/screens/Cart/store/CartStore";
import CartPreview from "@/screens/Cart/CartPreview";
import useFavoriteStore from "@/screens/Favorite/store/FavoriteStore";

const Header = () => {
  const navigate = useNavigate();
  const [popoverAnchorEl, setPopoverAnchorEl] = useState<null | HTMLElement>(
    null,
  );
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const cartQuantity = useCartStore((state) => state.getLength());
  const logout = useAuthStore((state) => state.logout);
  const favoriteItems = useFavoriteStore((state) => state.favoriteItems);
  let favoriteQuantity = favoriteItems.length;

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setPopoverAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setPopoverAnchorEl(null);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleProfile = () => {
    navigate("/customer-info");
    handleMenuClose();
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
    handleMenuClose();
  };

  const isPopoverOpen = Boolean(popoverAnchorEl);
  const isMenuOpen = Boolean(menuAnchorEl);

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
          <Link
            className="font-base mx-3 text-center text-base text-black"
            to={"/category"}
          >
            <ListIcon />
            <span className="ml-1">Danh mục</span>
          </Link>
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
          <IconButton
            onMouseLeave={handlePopoverClose}
            onMouseEnter={handlePopoverOpen}
            className="bg-black"
            onClick={() => navigate("/cart")}
          >
            <Badge badgeContent={cartQuantity} color="error">
              <ShoppingCartOutlinedIcon />
            </Badge>

            <Popover
              open={isPopoverOpen}
              anchorEl={popoverAnchorEl}
              onClose={handlePopoverClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              sx={{
                pointerEvents: "none",
              }}
              slotProps={{
                paper: {
                  onMouseEnter: () => setPopoverAnchorEl(popoverAnchorEl),
                  onMouseLeave: handlePopoverClose,
                },
              }}
            >
              <CartPreview />
            </Popover>
          </IconButton>
          <IconButton
            className="bg-black"
            onClick={() => navigate("/favorite")}
          >
            <Badge badgeContent={favoriteQuantity} color="error">
              <FavoriteBorderOutlinedIcon />
            </Badge>
          </IconButton>

          <IconButton className="bg-black" onClick={handleMenuOpen}>
            <AccountCircleOutlinedIcon />
          </IconButton>

          <Menu
            anchorEl={menuAnchorEl}
            open={isMenuOpen}
            onClose={handleMenuClose}
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
