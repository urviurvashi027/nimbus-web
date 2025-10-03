import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
// import * as path from "path"; // Use the correct import here

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // This lets Sass understand aliases
        additionalData: `@use "@/styles/theme" as *;`,
      },
    },
  },
});
