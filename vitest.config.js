import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    setupFiles: ["__test__/setup.js"],
    globals: true,
    environment: "jsdom",
  },
});
