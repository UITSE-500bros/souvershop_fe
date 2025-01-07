import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import useCartStore from "./store/CartStore";
const CartPreview = () => {
  
  const cartItems = useCartStore((state) => state.cartItems);
  const recentItems = cartItems.slice(0, 3);
  return (
    <Box
      sx={{
        width: "300px",
        padding: "10px",
        backgroundColor: "#fff",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        borderRadius: "8px",
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", marginBottom: "10px" }}
      >
        Sản phẩm gần nhất
      </Typography>
      <Divider />
      <List>
        {recentItems.map((item, index) => (
          <ListItem key={index} disableGutters>
            <img
              src={item.product_image[0]}
              alt={item.product_name}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "4px",
                marginRight: "10px",
              }}
            />
            <ListItemText
              primary={item.product_name}
              secondary={`${item.quantity} x ${item.product_selling_price.toLocaleString()}₫`}
            />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Button
        variant="contained"
        fullWidth
        sx={{ marginTop: "10px", backgroundColor: "#000", color: "#fff" }}
        onClick={() => (window.location.href = "/cart")}
      >
        Xem tất cả
      </Button>
    </Box>
  );
};

export default CartPreview;
