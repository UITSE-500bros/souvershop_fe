import React from "react";
import { Button } from "@mui/material";
import { FaEdit, FaDownload } from "react-icons/fa";

export default function ProductInfoButton() {
  return (
    <div className="flex gap-4">
      <Button
        variant="outlined"
        startIcon={<FaEdit />}
        sx={{ textTransform: "none" }}
      >
        Chỉnh sửa
      </Button>
      <Button
        variant="contained"
        color="primary"
        startIcon={<FaDownload />}
        sx={{ textTransform: "none" }}
      >
        Tải về
      </Button>
    </div>
  );
}
