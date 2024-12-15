/// <reference types="vitest" />
import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test:{
    globals: true, // Enable Jest-like globals like `describe`, `test`, etc.
    environment: 'jsdom', // Set the test environment to jsdom (for React testing)
    setupFiles: './src/setupTests.ts',


  }
});
