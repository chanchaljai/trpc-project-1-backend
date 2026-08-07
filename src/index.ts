import express from "express";
import cors from "cors";
import { createExpressMiddleware } from "@trpc/server/adapters/express";

import { router } from "./trpc.js";
import { userRouter } from "./routers/user.router.js";

const app = express();

app.use(cors());

const appRouter = router({
  user: userRouter,
});

app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
  }),
);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

export type AppRouter = typeof appRouter;