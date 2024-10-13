import { Router } from "express";
import { isemailAvailable, isUserNameAvailable } from "../controllers/user.controller.js";

const userRouter = Router();
userRouter.route("/is-username-available").get(isUserNameAvailable);
userRouter.route("/is-email-available").get(isemailAvailable);
export default userRouter;