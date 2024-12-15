import { render, screen } from "@testing-library/react";
import Login from "../Login";
import { BrowserRouter } from "react-router-dom";

test("render ", () => {
  render(
    <BrowserRouter>
        <Login />
    </BrowserRouter>
  );
  expect(screen.getByText("Đăng nhập")).toBeInTheDocument();
});
