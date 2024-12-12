import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="flex h-full w-full flex-row justify-start bg-[#F8F2E5]">
      <form className="my-auto ml-[75px] flex h-auto w-full flex-1 flex-col items-start justify-start gap-8 text-black">
        <div className="self-start text-3xl">Đăng ký</div>
        <div className="flex flex-col justify-start self-start">
          <div className="text-base font-normal">Đã có tài khoản?</div>
          <Link
            to={"/login"}
            className="text-base font-[600] text-[#7B5D44] underline"
          >
            Đăng nhập ngay
          </Link>
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
      <img
        src="src\assets\login.jpeg"
        alt="login"
        className="h-lvh w-1/2 rounded-bl-[40px] rounded-tl-[40px] object-cover"
      />
    </div>
  );
}

export default SignUp;
