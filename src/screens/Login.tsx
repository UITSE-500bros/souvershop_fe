import { Input } from "@/components/ui/input";
import { Button } from "@mui/material";
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
      <div className="form flex h-auto w-full flex-1 items-center justify-center">
        <div className="flex w-full flex-col items-center justify-start gap-[31px]">
          <div className="font-['Inter'] text-3xl font-black text-white">
            Đăng nhập
          </div>
          <div>Hoặc bạn không có tài khoản?</div>
          <div>Đăng ký tại đây</div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="password">Mật khẩu</Label>
            <Input type="password" id="password" placeholder="Mật khẩu" />
          </div>
          <div className="remberbox flex w-full flex-row items-center justify-between">
            <div className="rememberpass flex flex-row">
              <input type="checkbox" />
              <div>Nhớ mật khẩu</div>
            </div>

            <div>Quên mật khẩu</div>
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
