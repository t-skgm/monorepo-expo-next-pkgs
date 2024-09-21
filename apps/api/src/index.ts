import { Hono } from "hono";
import { appName } from "@repo/domain";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

const app = new Hono();

const helloSchema = z.object({
  name: z.string(),
});

const routes = app
  .get("/", (c) => {
    return c.text(`This is ${appName}`);
  })
  .post("/greeting", zValidator("json", helloSchema), (c) => {
    const { name } = c.req.valid("json");
    return c.json({
      message: `Hello ${name}!`,
    });
  });

export type AppType = typeof routes;

export default routes;
