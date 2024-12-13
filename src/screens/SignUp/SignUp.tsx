import { Button, TextField } from "@mui/material";
import { useRef, useState } from "react";

import { Link } from "react-router-dom";
import SignUpTextField from "./SignUpTextField";
import { signUp } from "./services/SignUp.service";


function SignUp() {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleInputChange = (field: string, value: string) => {
    setFormValue((prev) => ({ ...prev, [field]: value }));
  };
  const isValidateEmail = () => {
    const email = formValue.email;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };
  const isValidate = () => {
    const { email, password, confirmPassword } = formValue;
    let emailError = "";
    let passwordError = "";
    let confirmPasswordError = "";

    if (!email) {
      emailError = "Email không được để trống";
    } else if (!isValidateEmail()) {
      emailError = "Email không hợp lệ";
    }

    if (!password) {
      passwordError = "Mật khẩu không được để trống";
    } else if (password.length < 6) {
      passwordError = "Mật khẩu phải lớn hơn 6 ký tự";
    }

    if (!confirmPassword) {
      confirmPasswordError = "Mật khẩu không được để trống";
    } else if (confirmPassword !== password) {
      confirmPasswordError = "Mật khẩu không khớp";
    }

    setError({
      email: emailError,
      password: passwordError,
      confirmPassword: confirmPasswordError,
    });

    return !emailError && !passwordError && !confirmPasswordError;
  };

  const handleSubmit = () => {
    if (!isValidate()) return;
    console.log(formValue);
  };

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

        <SignUpTextField
          error={!!error.email}
          helperText={error.email}
          label="Email"
          onValueChange={(value) => handleInputChange("email", value)}
        />
        <SignUpTextField
          label="Mật khẩu"
          isPassword
          error={!!error.password}
          helperText={error.password}
          onValueChange={(value) => handleInputChange("password", value)}
        />
        <SignUpTextField
          error={!!error.confirmPassword}
          helperText={error.confirmPassword}
          label="Nhập lại mật khẩu"
          isPassword
          onValueChange={(value) => handleInputChange("confirmPassword", value)}
        />

        <Button
          onClick={handleSubmit}
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
