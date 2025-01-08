import { Button, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function NewPassword() {
  const nav = useNavigate();
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex h-[700px] w-[657px] flex-col items-center justify-center gap-1 bg-[#F8F2E5] px-[60px] py-[80px]">
        <div className="text-[45px] font-bold text-[#153060]">SouverShop</div>
        <div className="font-['Open Sans'] w-[537px] text-[45px] font-normal leading-[52px] text-[#153060]">
          Mật khẩu mới
        </div>
        <div className="font-['Open Sans'] w-[537px] text-base font-normal leading-normal tracking-tight text-[#828282]">
          Đặt mật khẩu mới cho tài khoản của bạn để bạn có thể đăng nhập và truy
          cập tất cả các tính năng.{" "}
        </div>
        <div className="text-input-block">
          <div className="text-[14px] text-base font-normal">
            Nhập mật khẩu mới
          </div>
          <TextField
            variant="outlined"
            className="h-[48px] w-[537px]"
            type="password"
            placeholder="Ít nhất 8 ký tự"
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#153060", // Change the border color when focused
                },
              },
              "& .MuiInputLabel-root": {
                "&.Mui-focused": {
                  color: "#153060", // Change the label color when focused
                },
              },
            }}
          />
        </div>

        <Button
          variant="contained"
          onAbort={() => nav("/")}
        sx={{
          backgroundColor: "#153060",
          marginTop: "50px",
          color: "white",
          width: "207px",
          height: "48px",
          textTransform: "none",
          fontSize: "14px",
          fontWeight: "bold",
          borderRadius: "24px",
          "&:hover": {
            backgroundColor: "#153060",
          },
        }}
        >
          Xác nhận
        </Button>
       
      </div>
    
    </div>
  );
}
