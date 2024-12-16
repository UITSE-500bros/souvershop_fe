import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import Login from "../screens/Login/Login";
import { login } from "../screens/Login/services/Login.service";
import { isValidate } from "@/utils/validation";

// Mock the login function
vi.mock("../screens/Login/services/Login.service");
const mockLogin = login as jest.MockedFunction<typeof login>;

// Mock the validation function
vi.mock("@/utils/validation", () => ({
  isValidate: vi.fn(),
}));

describe("Login Component", () => {
  beforeEach(() => {
    mockLogin.mockReset();
  });

  it("renders the Login form", () => {
    render(
      <Router>
        <Login />
      </Router>,
    );

    expect(screen.getByText("Chưa có tài khoản?")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Đăng nhập" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Đăng nhập với Facebook" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Đăng nhập với Google" }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Mật khẩu")).toBeInTheDocument();
  });

  it("displays validation errors when submitting empty form", async () => {
    render(
      <Router>
        <Login />
      </Router>,
    );

    const loginButton = screen.getByRole("button", { name: "Đăng nhập" });
    userEvent.click(loginButton);

    expect(
      await screen.findByText("Email không được để trống"),
    ).toBeInTheDocument();
    expect(
      await screen.findByText("Mật khẩu không được để trống"),
    ).toBeInTheDocument();
  });

  it("allows user to type in input fields", async () => {
    render(
      <Router>
        <Login />
      </Router>,
    );

    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Mật khẩu");

    await userEvent.type(emailInput, "test@example.com");
    await userEvent.type(passwordInput, "password123");

    expect(emailInput).toHaveValue("test@example.com");
    expect(passwordInput).toHaveValue("password123");
  });

  it("handles successful login", async () => {
    render(
      <Router>
        <Login />
      </Router>,
    );

    (isValidate as jest.Mock).mockReturnValue({
      emailError: "",
      passwordError: "",
      isValid: true,
    });

    mockLogin.mockResolvedValueOnce({ message: "success" });

    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Mật khẩu");
    await userEvent.type(emailInput, "test@example.com");
    await userEvent.type(passwordInput, "password123");

    const loginButton = screen.getByRole("button", { name: "Đăng nhập" });
    userEvent.click(loginButton);

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith("test@example.com", "password123");
    });
  });

  it("handles login with unverified email", async () => {
    render(
      <Router>
        <Login />
      </Router>,
    );

    (isValidate as jest.Mock).mockReturnValue({
      emailError: "",
      passwordError: "",
      isValid: true,
    });

    mockLogin.mockRejectedValueOnce(new Error("Please verify your email"));

    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Mật khẩu");
    await userEvent.type(emailInput, "unverified@example.com");
    await userEvent.type(passwordInput, "password123");

    const loginButton = screen.getByRole("button", { name: "Đăng nhập" });
    userEvent.click(loginButton);

    expect(
      await screen.findByText("Please verify your email"),
    ).toBeInTheDocument();
  });

  it("handles login with nonexistent email", async () => {
    render(
      <Router>
        <Login />
      </Router>,
    );

    (isValidate as jest.Mock).mockReturnValue({
      emailError: "",
      passwordError: "",
      isValid: true,
    });

    mockLogin.mockRejectedValueOnce(new Error("User does not exist"));

    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Mật khẩu");
    await userEvent.type(emailInput, "nonexistent@example.com");
    await userEvent.type(passwordInput, "password123");

    const loginButton = screen.getByRole("button", { name: "Đăng nhập" });
    userEvent.click(loginButton);

    expect(await screen.findByText("User does not exist")).toBeInTheDocument();
  });

  it("handles login with wrong password", async () => {
    render(
      <Router>
        <Login />
      </Router>,
    );

    (isValidate as jest.Mock).mockReturnValue({
      emailError: "",
      passwordError: "",
      isValid: true,
    });

    mockLogin.mockRejectedValueOnce(new Error("Invalid credentials"));

    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Mật khẩu");
    await userEvent.type(emailInput, "test@example.com");
    await userEvent.type(passwordInput, "wrongpassword");

    const loginButton = screen.getByRole("button", { name: "Đăng nhập" });
    userEvent.click(loginButton);

    expect(
      await screen.findByText((content, element) =>
        content.includes("Invalid credentials"),
      ),
    ).toBeInTheDocument();
  });

  it("handles login with empty email", async () => {
    render(
      <Router>
        <Login />
      </Router>,
    );

    (isValidate as jest.Mock).mockReturnValue({
      emailError: "Email không được để trống",
      passwordError: "",
      isValid: false,
    });

    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Mật khẩu");
    await userEvent.type(passwordInput, "password123");

    const loginButton = screen.getByRole("button", { name: "Đăng nhập" });
    userEvent.click(loginButton);

    expect(
      await screen.findByText("Email không được để trống"),
    ).toBeInTheDocument();
  });

  it("handles login with empty password", async () => {
    render(
      <Router>
        <Login />
      </Router>,
    );

    (isValidate as jest.Mock).mockReturnValue({
      emailError: "",
      passwordError: "Mật khẩu không được để trống",
      isValid: false,
    });

    const emailInput = screen.getByLabelText("Email");
    await userEvent.type(emailInput, "test@example.com");

    const loginButton = screen.getByRole("button", { name: "Đăng nhập" });
    userEvent.click(loginButton);

    expect(
      await screen.findByText("Mật khẩu không được để trống"),
    ).toBeInTheDocument();
  });
});
