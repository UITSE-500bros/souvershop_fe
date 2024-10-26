import { Input } from "@/components/ui/input";
import { Button, TextField } from "@mui/material";
import { Label } from "@radix-ui/react-label";
import React from "react";

function Login() {
  return (
    <div className="flex h-full w-full flex-row justify-start bg-[#DBAD34]">
      <div className="image h-[800px] w-[862px]">
        <img
          src="https://hoangviettravel.vn/wp-content/uploads/2020/02/du-lich-tokyo-20-min.jpg"
          alt="login"
          className="h-full w-full rounded-bl-[40px] rounded-tr-[40px] object-cover"
        />
      </div>
      <div className="form ml-[75px] flex h-auto w-full flex-1 items-center justify-start">
        <div className="flex w-auto flex-col items-center justify-start gap-[31px]">
          <div className="self-start font-['Inter'] text-3xl font-black text-white">
            Đăng nhập
          </div>
          <div className="flex flex-col justify-start self-start">
            <div>Hoặc bạn không có tài khoản?</div>
            <a className="text-[#7B5D44] underline">Đăng ký ngay</a>
          </div>
          <TextField
            label="Email"
            required
            sx={{ width: 430 }}
            variant="outlined"
          />
          <TextField label="Mật khẩu" sx={{ width: 430 }} variant="outlined" />

          <div className="remberbox flex w-[429px] flex-row items-center justify-between">
            <div className="rememberpass flex flex-row">
              <input type="checkbox" />
              <div>Nhớ mật khẩu</div>
            </div>

            <Button variant="text">Quên mật khẩu</Button>
          </div>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#7B5D44",
              color: "white",
              textTransform: "none",
              width: "429px",
              height: "53px",
              borderRadius: "32px",
              fontSize: "16px",
              fontWeight: "bold",
              boxShadow: "0px 4px 26px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            Đăng nhập
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
