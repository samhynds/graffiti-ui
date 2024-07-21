import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: "v8",
      exclude: ["src/**/*.stories.tsx", "src/**/index.tsx"],
      include: ["src/**/*.tsx"],
    },
    typescript: {
      tsconfig: "./tsconfig.test.json",
    },
  },
});
