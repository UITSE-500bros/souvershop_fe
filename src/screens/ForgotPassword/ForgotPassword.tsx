import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const nav = useNavigate();
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex h-[535px] w-[657px] flex-col gap-8 bg-[#F8F2E5] px-[60px] py-[80px]">
        <div className="text-[32px] font-bold text-[#153060]">SouverShop</div>

        <div className="font-['Open Sans'] w-[537px] text-[45px] font-normal leading-[52px] text-[#153060]">
          Quên mật khẩu
        </div>

        <div className="font-['Open Sans'] w-[537px] text-base font-normal text-[#828282]">
          Nhập email bạn đã đăng ký, chúng tôi sẽ gửi đường link để xác nhận
        </div>

        <TextField
          fullWidth
          label={"Email"}
          placeholder="Nhập email"
          variant="outlined"
        />

        <Button
          variant="contained"
          color="primary"
          onClick={() => nav("/new-password")}
          sx={{
            backgroundColor: "#FFC633",
            color: "#fff",
            borderRadius: "10px",
          }}
        >
          Tiếp Tục
        </Button>
      </div>
    </div>
  );
}
