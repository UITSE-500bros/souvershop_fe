import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import customTheme from "./styles/customTheme.ts";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>

    <ThemeProvider theme={customTheme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
 
);
