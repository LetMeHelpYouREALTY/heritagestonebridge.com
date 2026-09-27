import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    plugins: [
      qwikCity(),
      qwikVite({
        client: {
          outDir: "dist/client",
        },
        ssr: {
          outDir: ".vercel/output/functions/_qwik-city.func",
        },
      }),
      tsconfigPaths(),
    ],
    build: {
      rollupOptions: {
        // CRITICAL: Prevent duplicate module resolution
        external: [],
        output: {
          manualChunks: undefined,
          // CRITICAL: Ensure unique module IDs
          chunkFileNames: "[name]-[hash].js",
          entryFileNames: "[name]-[hash].js",
        },
      },
      // CRITICAL: Prevent module duplication
      commonjsOptions: {
        include: [/node_modules/],
        transformMixedEsModules: true,
      },
    },
    // CRITICAL: Resolve module conflicts
    resolve: {
      dedupe: ["@builder.io/qwik", "@builder.io/qwik-city"],
      alias: {
        "@": "/src",
      },
    },
  };
});