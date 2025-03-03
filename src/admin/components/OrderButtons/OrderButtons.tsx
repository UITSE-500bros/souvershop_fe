import { Button } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

export default function OrderButton({ onAddOrder }: { onAddOrder: () => void }) {
  return (
    <div className="flex gap-2">
      <Button
        variant="contained"
        onClick={onAddOrder}
        sx={{
          backgroundColor: "#1366D9",
          color: "#fff",
          borderRadius: "4px",
          textTransform: "none",
        }}
      >
        Thêm đơn hàng
      </Button>
      <Button
        variant="outlined"
        startIcon={<FilterListIcon />}
        sx={{
          color: "#5D6679",
          borderColor: "#5D6679",
          textTransform: "none",
          borderRadius: "4px",
        }}
      >
        Bộ lọc
      </Button>
      <Button
        variant="outlined"
        sx={{
          color: "#5D6679",
          borderColor: "#5D6679",
          textTransform: "none",
          borderRadius: "4px",
        }}
      >
        Tải xuống tất cả
      </Button>
    </div>
  );
}
