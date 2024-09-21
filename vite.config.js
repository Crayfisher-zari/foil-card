import { defineConfig } from "vite";
const basePath = process.env.BASE_PATH || "/";
export default defineConfig({
  build: {
    outDir: "./dist",
    base: basePath,
  },
});
