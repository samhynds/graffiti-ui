import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: "v8",
      exclude: ["src/**/*.stories.tsx", "src/**/index.tsx"],
      include: ["src/**/*.tsx"],
    }
  },
});
