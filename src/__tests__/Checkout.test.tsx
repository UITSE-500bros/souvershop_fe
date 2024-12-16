import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import CheckoutPage from "../screens/CheckoutPage";
import { Container } from "@mui/material";

// Mock the alert function
vi.spyOn(window, "alert").mockImplementation(() => {});

describe("CheckoutPage Component", () => {
  const setup = (subtotal: number, paymentMethod: string) => {
    render(
      <Container>
        <CheckoutPage />
      </Container>
    );

    // Set subtotal and payment method
    fireEvent.change(screen.getByLabelText("Tổng cộng"), {
      target: { value: subtotal },
    });
    fireEvent.change(screen.getByLabelText("Chi Tiết Thanh Toán"), {
      target: { value: paymentMethod },
    });
  };

  it("handles successful order confirmation", async () => {
    setup(10000, "Momo");

    const confirmButton = screen.getByRole("button", { name: "Xác nhận" });
    fireEvent.click(confirmButton);

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith("Đơn hàng đã được xác nhận!");
    });
  });

  it("handles order confirmation with amount less than 5000", async () => {
    setup(4000, "Momo");

    const confirmButton = screen.getByRole("button", { name: "Xác nhận" });
    fireEvent.click(confirmButton);

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith("The amount must be larger than 5000 vnd");
    });
  });

  it("handles order confirmation failure", async () => {
    setup(10000, "Momo");

    // Simulate server failure
    vi.spyOn(global, "fetch").mockImplementation(() =>
      Promise.reject(new Error("Server error"))
    );

    const confirmButton = screen.getByRole("button", { name: "Xác nhận" });
    fireEvent.click(confirmButton);

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith("Error confirming order");
    });
  });
});