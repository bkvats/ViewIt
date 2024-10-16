import { Router } from "express";
import { isemailAvailable, isUserNameAvailable, registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const userRouter = Router();
userRouter.route("/is-username-available").get(isUserNameAvailable);
userRouter.route("/is-email-available").get(isemailAvailable);
userRouter.route("/register-user").post(upload.single("avatar"), registerUser)
export default userRouter;