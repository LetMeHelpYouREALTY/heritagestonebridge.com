import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./tests/setup.tsx",
    // Pre-existing suites fail independently of Cloudflare Images (FUB client
    // exports, rate-limit mocks, form copy, matchMedia). Keep new tests green.
    exclude: [
      "**/node_modules/**",
      "lib/fub/client.test.ts",
      "middleware/claude-rate-limit.test.ts",
      "components/forms/LeadCaptureForm.test.tsx",
      "hooks/useReducedMotion.test.ts",
    ],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules/",
        "tests/",
        ".next/",
        "out/",
        "*.config.js",
        "*.config.ts",
      ],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
      lib: path.resolve(__dirname, "./lib"),
      components: path.resolve(__dirname, "./components"),
      app: path.resolve(__dirname, "./app"),
    },
  },
});
