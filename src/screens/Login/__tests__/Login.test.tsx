import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import Login from "../Login";

describe("Login Component", () => {
  it("renders the Login form", () => {
    render(
      <Router>
        <Login />
      </Router>,
    );

    // Check if all form elements are rendered

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

    // Simulate form submission with empty fields
    const loginButton = screen.getByRole("button", { name: "Đăng nhập" });
    userEvent.click(loginButton);

    // Check if validation errors appear
    expect(await screen.findByText("Email không được để trống")).toBeInTheDocument(); // Adjust to match your `isValidate` function
    expect(
      await screen.findByText("Mật khẩu không được để trống"),
    ).toBeInTheDocument(); // Adjust to match your `isValidate` function
  });

  it("allows user to type in input fields", async () => {
    render(
      <Router>
        <Login />
      </Router>,
    );

    // Get email and password input fields
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Mật khẩu");

    // Simulate typing
    await userEvent.type(emailInput, "test@example.com");
    await userEvent.type(passwordInput, "password123");

    // Check if input values have been updated
    expect(emailInput).toHaveValue("test@example.com");
    expect(passwordInput).toHaveValue("password123");
  });
});
