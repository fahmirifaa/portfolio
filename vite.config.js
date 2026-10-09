import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// base "./" membuat hasil build bisa dibuka dari subfolder, misalnya GitHub Pages (username.github.io/nama-repo)
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
});
