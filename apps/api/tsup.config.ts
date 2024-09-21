import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "build",
  dts: true,
  external: ["react", "react-native"],
});
