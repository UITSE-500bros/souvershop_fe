import { Button, IconButton } from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

export default function ButtonGroup({ value }: { value: number }) {
  return (
    <div className="flex h-full w-full flex-row items-center justify-between">
      <IconButton
        children={<RemoveCircleOutlineIcon />}
        className="h-10 w-10"
      />
      <div className="font-['Inter'] text-base font-medium text-black">
        {value}
      </div>
      <IconButton children={<AddCircleOutlineIcon />} className="h-10 w-10" />
    </div>
  );
}
