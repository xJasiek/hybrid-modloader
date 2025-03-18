import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/hybrid-modloader/", // Must match your GitHub repository name!
});
