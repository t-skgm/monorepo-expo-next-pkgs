import { Hono } from "hono";
import { appName } from "@repo/domain";

const app = new Hono();

app.get("/", (c) => {
  return c.text(`Hello by ${appName}`);
});

export default app;
