import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "remote-one"],
    },
  },
  server: {
    port: 3100,
  },
  optimizeDeps: {
    exclude: ["remote-one"],
  },
  resolve: {
    alias: {
      "remote-one": "../remote-one/dist/index.js",
    },
  },
});
