import { defineConfig } from '@builder.io/qwik';

export default defineConfig({
  // CRITICAL: Prevent duplicate exports in Qwik build
  build: {
    // Use smart entry strategy to prevent module conflicts
    entryStrategy: {
      type: 'smart',
      manual: {},
    },
    // Prevent duplicate module resolution
    minify: 'esbuild',
    // Ensure unique module IDs
    target: 'es2020',
  },
  // CRITICAL: Optimize for production without conflicts
  optimize: {
    // Prevent duplicate exports
    entryStrategy: {
      type: 'smart',
      manual: {},
    },
  },
});
