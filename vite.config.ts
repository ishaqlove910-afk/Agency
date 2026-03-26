import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    strictPort: false,
    allowedHosts: [
      "localhost",
      "127.0.0.1",
      ".loca.lt",
      ".ngrok.io",
      "mighty-rice-ask.loca.lt",
      "modern-rules-sniff.loca.lt",
      "curvy-readers-warn.loca.lt",
    ],
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
}));
