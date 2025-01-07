import { Button, IconButton } from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

export default function ButtonGroup({
  value,
  onIncrement,
  onDecrement,
}: {
  value: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}) {
  return (
    <div className="flex h-full w-full flex-row items-center justify-between">
      <IconButton onClick={onDecrement} className="h-10 w-10">
        <RemoveCircleOutlineIcon />
      </IconButton>
      <div className="font-['Inter'] text-base font-medium text-black">
        {value}
      </div>
      <IconButton onClick={onIncrement} className="h-10 w-10">
        <AddCircleOutlineIcon />
      </IconButton>
    </div>
  );
}
