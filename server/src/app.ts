import express from "express";
import authRouter from "./features/auth/auth.routes.js";
import { errorMiddleware } from "./shared/middleware/error.middleware.js";

const app = express();

app.use(express.json());

app.use("/api/v1/auth", authRouter);

// error middleware
app.use(errorMiddleware);

export default app;
