import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./tests/setup.tsx",
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.{idea,git,cache,output,temp}/**",
      // Specs written against APIs that were never exported.
      "lib/fub/client.test.ts",
      "middleware/claude-rate-limit.test.ts",
    ],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "json-summary", "html"],
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
