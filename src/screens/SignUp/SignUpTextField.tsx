import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface SignUpTextFieldProps {
  label: string;
  isPassword?: boolean;
  onValueChange?: (value: string) => void;
  error?: boolean;
  helperText?: string;
}

const SignUpTextField: React.FC<SignUpTextFieldProps> = ({
  label,
  isPassword,
  onValueChange,
  error,
  helperText,
}) => {
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onValueChange?.(newValue);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <TextField
      type={isPassword && !showPassword ? "password" : "text"}
      value={value}
      label={value ? label : ""}
      required
      sx={{ width: 430 }}
      variant="outlined"
      onChange={handleValueChange}
      error={error}
      helperText={helperText}
      InputProps={{
        endAdornment: isPassword ? (
          <InputAdornment position="end">
            <IconButton onClick={handleTogglePasswordVisibility} edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ) : null,
      }}
    />
  );
};

export default SignUpTextField;
