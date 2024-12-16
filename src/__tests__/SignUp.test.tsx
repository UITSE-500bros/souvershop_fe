import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import SignUp from "../screens/SignUp/SignUp";
import { signUp } from "../screens/SignUp/services/SignUp.service";
import { isValidate } from "@/utils/validation";

// Mock the signUp function
vi.mock("../screens/SignUp/services/SignUp.service");
const mockSignUp = signUp as jest.MockedFunction<typeof signUp>;

// Mock the validation function
vi.mock("@/utils/validation", () => ({
  isValidate: vi.fn(),
}));

describe("SignUp Component", () => {
  beforeEach(() => {
    mockSignUp.mockReset();
  });

  it("renders the SignUp form", () => {
    render(
      <Router>
        <SignUp />
      </Router>,
    );

    expect(screen.getByText("Đã có tài khoản?")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Đăng Ký" })).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Mật khẩu")).toBeInTheDocument();
    expect(screen.getByText("Nhập lại mật khẩu")).toBeInTheDocument();
  });

  it("displays validation errors when submitting empty form", async () => {
    render(
      <Router>
        <SignUp />
      </Router>,
    );

    const signUpButton = screen.getByRole("button", { name: "Đăng Ký" });
    fireEvent.click(signUpButton);

    expect(
      await screen.findByText("Email không được để trống"),
    ).toBeInTheDocument();
    expect(
      await screen.findByText("Mật khẩu không được để trống"),
    ).toBeInTheDocument();
    expect(await screen.findByText("Mật khẩu không khớp")).toBeInTheDocument();
  });

  it("handles successful sign up", async () => {
    render(
      <Router>
        <SignUp />
      </Router>,
    );

    (isValidate as jest.Mock).mockReturnValue({
      emailError: "",
      passwordError: "",
      confirmPasswordError: "",
      isValid: true,
    });

    mockSignUp.mockResolvedValueOnce({
      message:
        "Your account created successfully. Please check email to confirm registration",
    });

    const emailInput = screen.getByText("Email");
    const passwordInput = screen.getByText("Mật khẩu");
    const confirmPasswordInput = screen.getByText("Nhập lại mật khẩu");
    const signUpButton = screen.getByRole("button", { name: "Đăng Ký" });

    fireEvent.change(emailInput, {
      target: { value: "nguyenchilam259@gmail.com" },
    });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "password123" },
    });

    fireEvent.click(signUpButton);

    await waitFor(() => {
      expect(mockSignUp).toHaveBeenCalledWith(
        "nguyenchilam259@gmail.com",
        "password123",
      );
      expect(
        screen.getByText(
          "Your account created successfully. Please check email to confirm registration",
        ),
      ).toBeInTheDocument();
    });
  });

  it("handles sign up with empty fields", async () => {
    render(
      <Router>
        <SignUp />
      </Router>,
    );

    (isValidate as jest.Mock).mockReturnValue({
      emailError: "Email không được để trống",
      passwordError: "Mật khẩu không được để trống",
      confirmPasswordError: "Mật khẩu không khớp",
      isValid: false,
    });

    const signUpButton = screen.getByRole("button", { name: "Đăng Ký" });
    fireEvent.click(signUpButton);

    expect(
      await screen.findByText("Email không được để trống"),
    ).toBeInTheDocument();
    expect(
      await screen.findByText("Mật khẩu không được để trống"),
    ).toBeInTheDocument();
    expect(await screen.findByText("Mật khẩu không khớp")).toBeInTheDocument();
  });

  it("handles sign up with existing user", async () => {
    render(
      <Router>
        <SignUp />
      </Router>,
    );

    (isValidate as jest.Mock).mockReturnValue({
      emailError: "",
      passwordError: "",
      confirmPasswordError: "",
      isValid: true,
    });

    mockSignUp.mockRejectedValueOnce(new Error("User already exists"));

    const emailInput = screen.getByText("Email");
    const passwordInput = screen.getByText("Mật khẩu");
    const confirmPasswordInput = screen.getByText("Nhập lại mật khẩu");
    const signUpButton = screen.getByRole("button", { name: "Đăng Ký" });

    fireEvent.change(emailInput, {
      target: { value: "nguyenchilam259@gmail.com" },
    });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "password123" },
    });

    fireEvent.click(signUpButton);

    await waitFor(() => {
      expect(mockSignUp).toHaveBeenCalledWith(
        "nguyenchilam259@gmail.com",
        "password123",
      );
      expect(screen.getByText("User already exists")).toBeInTheDocument();
    });
  });

  it("handles sign up with error creating user", async () => {
    render(
      <Router>
        <SignUp />
      </Router>,
    );

    (isValidate as jest.Mock).mockReturnValue({
      emailError: "",
      passwordError: "",
      confirmPasswordError: "",
      isValid: true,
    });

    mockSignUp.mockRejectedValueOnce(new Error("Error creating user"));

    const emailInput = screen.getByText("Email");
    const passwordInput = screen.getByText("Mật khẩu");
    const confirmPasswordInput = screen.getByText("Nhập lại mật khẩu");
    const signUpButton = screen.getByRole("button", { name: "Đăng Ký" });

    fireEvent.change(emailInput, {
      target: { value: "nguyenchilam259@gmail.com" },
    });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "password123" },
    });

    fireEvent.click(signUpButton);

    await waitFor(() => {
      expect(mockSignUp).toHaveBeenCalledWith(
        "nguyenchilam259@gmail.com",
        "password123",
      );
      expect(screen.getByText("Error creating user")).toBeInTheDocument();
    });
  });
});
