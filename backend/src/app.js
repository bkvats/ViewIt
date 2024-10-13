import express from "express";
import userRouter from "./routes/user.routes.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json({limit: "32kb"}));
app.use("/api/v1/users", userRouter);
export default app;