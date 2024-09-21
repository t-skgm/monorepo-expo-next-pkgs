import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "build",
  sourcemap: true,
  dts: true,
  format: ["cjs", "esm"],
  external: ["react", "react-native"],
});
