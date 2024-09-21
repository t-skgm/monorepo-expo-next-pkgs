import type { AppType } from "@repo/api";

// import { hc } from "hono/client";
// https://github.com/honojs/hono/issues/1773
const { hc } = require("hono/dist/client") as typeof import("hono/client");

export const client = hc<AppType>(process.env.EXPO_PUBLIC_API_URL!);
