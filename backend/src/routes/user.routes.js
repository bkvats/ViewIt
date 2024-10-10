import { Router } from "express";
import { isUserNameAvailable } from "../controllers/user.controller.js";

const userRouter = Router();
userRouter.route("/is-username-available").get(isUserNameAvailable);
export default userRouter;