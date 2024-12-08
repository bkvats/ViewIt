import express from "express";
import userRouter from "./routes/user.routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import videoRouter from "./routes/video.routes.js";
const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(express.json({limit: "32kb"}));
app.use(express.urlencoded({limit: "16kb"}));
app.use(cookieParser());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/videos", videoRouter);
export default app;