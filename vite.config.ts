// vite.config.ts

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// 1. Import the Tailwind CSS plugin
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 2. Add the Tailwind CSS plugin to your plugins array
    tailwindcss(),
  ],
  // Optional: Add path alias for cleaner imports
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
