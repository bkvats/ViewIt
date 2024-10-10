import express from "express";
import userRouter from "./routes/user.routes.js";
const app = express();
app.use(express.json({limit: "32kb"}));
app.use("/api/v1/users", userRouter);
export default app;