import { defineConfig } from 'vitest/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  oxc: {
    jsx: {
      runtime: 'automatic',
    },
  },
  test: {
    include: ['tests/**/*.test.{ts,tsx}'],
    environment: 'jsdom',
    reporters: ['default'],
    setupFiles: ['./tests/setup.ts'],
    testTimeout: 15000,
    env: {
      NEXT_PUBLIC_BACKEND_URL: 'http://localhost:4000/graphql',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(rootDir, 'src'),
    },
  },
});
