import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./vitest-setup.ts"],
    coverage: {
      thresholds: {
        lines: 80,
      },
    },
    alias: {
      "~": path.resolve(__dirname, "./app"),
    },
  },
});
