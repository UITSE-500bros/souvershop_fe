import { Button, TextField } from "@mui/material";
import React from "react";

function SignUp() {
  return (
    <div className="flex h-full w-full flex-row justify-start bg-[#DBAD34]">
      <div className="image h-[800px] w-[862px]">
        <img
          src="https://hoangviettravel.vn/wp-content/uploads/2020/02/du-lich-tokyo-20-min.jpg"
          alt="login"
          className="h-full w-full rounded-bl-[40px] rounded-tr-[40px] object-cover"
        />
      </div>

      <form className="my-auto ml-[75px] flex h-auto w-full flex-1 flex-col items-start justify-start gap-8 text-white">
        <div className="self-start text-3xl">Đăng ký</div>
        <div className="flex flex-col justify-start self-start">
          <div className="text-base font-normal">Đã có tài khoản?</div>
          <a className="text-base font-[600] text-[#7B5D44] underline">
            Đăng nhập ngay
          </a>
        </div>

        <TextField
          label="Email"
          required
          sx={{ width: 430 }}
          variant="outlined"
        />

        <TextField
          label="Mật khẩu"
          required
          sx={{ width: 430 }}
          variant="outlined"
        />

        <TextField
          required
          label="Nhập lại mật khẩu"
          sx={{ width: 430 }}
          variant="outlined"
        />
        <Button
            variant="contained"
            sx={{
                fontFamily: "Inter",
              backgroundColor: "#7B5D44",
              color: "white",
              textTransform: "none",
              width: "429px",
              height: "53px",
              borderRadius: "32px",
              fontSize: "17px",
              fontWeight: "bold",
              boxShadow: "0px 4px 26px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            Đăng Ký
          </Button>
      </form>
    </div>
  );
}

export default SignUp;
