import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    include: ['**/tests/**/*.test.ts'],
    coverage: {
      provider: 'c8',
      reporter: ['lcov', 'text-summary'],
    },
  },
});
