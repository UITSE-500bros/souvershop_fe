export const isValidateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
};

export const isValidatePassword = (password: string): boolean => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/;
  return passwordRegex.test(password);
};

export const isValidate = (email: string, password: string, confirmPassword?: string) => {
  let emailError = "";
  let passwordError = "";
  let confirmPasswordError = "";

  if (!email) {
    emailError = "Email không được để trống";
  } else if (!isValidateEmail(email)) {
    emailError = "Email không hợp lệ";
  }

  if (!password) {
    passwordError = "Mật khẩu không được để trống";
  } else if (!isValidatePassword(password)) {
    passwordError = "Mật khẩu phải chứa ít nhất 8 ký tự, 1 chữ hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt";
  }

  if (confirmPassword !== undefined) {
    if (!confirmPassword) {
      confirmPasswordError = "Mật khẩu không được để trống";
    } else if (confirmPassword !== password) {
      confirmPasswordError = "Mật khẩu không khớp";
    }
  }

  return {
    emailError,
    passwordError,
    confirmPasswordError,
    isValid: !emailError && !passwordError && !confirmPasswordError,
  };
};