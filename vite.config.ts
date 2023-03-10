import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/jetfuel-take-home-exercise/",
  plugins: [react()],
});
