// LoadingDialog.js
import React from "react";
import { Dialog, DialogContent, CircularProgress } from "@mui/material";
type LoadingDialogProps = {
    open: boolean;
    };

const LoadingDialog = ({ open }:LoadingDialogProps) => {
  return (
    <Dialog open={open}>
      <DialogContent style={{ textAlign: "center", padding: "20px" }}>
        <CircularProgress />
        <p>Loading, please wait...</p>
      </DialogContent>
    </Dialog>
  );
};

export default LoadingDialog;
