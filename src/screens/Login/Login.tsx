import { useState } from "react";
import { Button, SvgIcon, TextField } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import { GoogleLogin } from "./services/Login.service";
import { isValidate } from "@/utils/validation";

function Login() {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormValue((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formValue;
    const { emailError, passwordError, isValid } = isValidate(email, password);

    setError({
      email: emailError,
      password: passwordError,
    });

    if (!isValid) return;

    try {
      console.log(email, password);
      // Add your login logic here
    } catch (err) {
      console.error("Error in Login:", err);
    }
  };

  const handleLoginWithGoogle = async () => {
    try {
      const res = await GoogleLogin();
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex h-full w-full flex-row justify-start bg-[#F8F2E5]">
      <form
        className="my-auto ml-[75px] flex h-auto w-full flex-1 flex-col items-start justify-start gap-8 text-black"
        onSubmit={handleSubmit}
      >
        <div className="self-start font-['Inter'] text-3xl font-black text-black">
          Đăng nhập
        </div>
        <div className="flex flex-col justify-start self-start">
          <div className="text-base font-normal">Chưa có tài khoản?</div>
          <Link
            to={"/signup"}
            className="text-base font-[600] text-[#7B5D44] underline"
          >
            Đăng ký ngay
          </Link>
        </div>

        <TextField
          error={!!error.email}
          helperText={error.email}
          label="Email"
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
        <TextField
          label="Mật khẩu"
          type="password"
          error={!!error.password}
          helperText={error.password}
          onChange={(e) => handleInputChange("password", e.target.value)}
        />

        <div className="remberbox flex w-[429px] flex-row items-center justify-between">
          <div className="rememberpass flex flex-row">
            <input type="checkbox" />
            <div>Nhớ mật khẩu</div>
          </div>

          <Link to="/forgot-password">Quên mật khẩu</Link>
        </div>

        <Button
          type="submit"
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
          Đăng nhập
        </Button>

        <div> Hoặc đăng nhập bằng</div>
        <Button
          startIcon={<FacebookIcon />}
          variant="contained"
          sx={{
            backgroundColor: "#1877F2",
            color: "white",
            textTransform: "none",
            width: "429px",
            height: "53px",
            borderRadius: "32px",
            fontSize: "20px",
            fontWeight: "bold",
            boxShadow: "0px 4px 26px 0px rgba(0, 0, 0, 0.25)",
            lineHeight: "normal",
            justifyContent: "start",
            paddingLeft: "40px",
          }}
        >
          Đăng nhập với Facebook
        </Button>
        <Button
          startIcon={
            <SvgIcon>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" fill="transparent" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.04 12.2615C23.04 11.446 22.9668 10.6619 22.8309 9.90918H12V14.3576H18.1891C17.9225 15.7951 17.1123 17.013 15.8943 17.8285V20.714H19.6109C21.7855 18.7119 23.04 15.7637 23.04 12.2615Z"
                  fill="#4285F4"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 23.5001C15.105 23.5001 17.7081 22.4703 19.6109 20.7139L15.8943 17.8285C14.8645 18.5185 13.5472 18.9262 12 18.9262C9.00474 18.9262 6.46951 16.9032 5.56519 14.1851H1.72314V17.1646C3.61542 20.923 7.50451 23.5001 12 23.5001Z"
                  fill="#34A853"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.56523 14.185C5.33523 13.495 5.20455 12.7579 5.20455 12C5.20455 11.242 5.33523 10.505 5.56523 9.81499V6.83545H1.72318C0.944318 8.38795 0.5 10.1443 0.5 12C0.5 13.8557 0.944318 15.612 1.72318 17.1645L5.56523 14.185Z"
                  fill="#FBBC05"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 5.07386C13.6884 5.07386 15.2043 5.65409 16.3961 6.79364L19.6945 3.49523C17.7029 1.63955 15.0997 0.5 12 0.5C7.50451 0.5 3.61542 3.07705 1.72314 6.83545L5.56519 9.815C6.46951 7.09682 9.00474 5.07386 12 5.07386Z"
                  fill="#EA4335"
                />
              </svg>
            </SvgIcon>
          }
          onClick={handleLoginWithGoogle}
          variant="contained"
          sx={{
            justifyContent: "start",
            paddingLeft: "40px",
            backgroundColor: "#FFFFFF",
            color: "gray",
            textTransform: "none",
            width: "429px",
            height: "53px",
            borderRadius: "32px",
            fontSize: "20px",
            fontWeight: "bold",
            boxShadow: "0px 4px 26px 0px rgba(0, 0, 0, 0.25)",
            lineHeight: "normal",
          }}
        >
          Đăng nhập với Google
        </Button>
      </form>
      <img
        src="src/assets/login.jpeg"
        alt="login"
        className="h-lvh w-1/2 rounded-bl-[40px] rounded-tl-[40px] object-cover"
      />
    </div>
  );
}

export default Login;
