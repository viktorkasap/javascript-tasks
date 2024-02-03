
import { defineConfig } from 'vite';
import tsconfigPaths from "vite-tsconfig-paths";
import { configDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ tsconfigPaths()],
  test: {
    globals: true,
    setupFiles: './test/setup.ts',
    exclude: [...configDefaults.exclude, 'test/setup.ts'],
  },
});
