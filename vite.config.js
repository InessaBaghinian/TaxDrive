import path from "path";
import { fileURLToPath } from "url"; // Import fileURLToPath
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Get the directory name from the module URL
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Vite configuration
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
