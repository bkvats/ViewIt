import { Router } from "express";
import { getCurrentUser, isemailAvailable, isUserNameAvailable, logInUser, logOutUser, registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const userRouter = Router();
userRouter.route("/is-username-available").get(isUserNameAvailable);
userRouter.route("/is-email-available").get(isemailAvailable);
userRouter.route("/register-user").post(upload.single("avatar"), registerUser);
userRouter.route("/login").post(logInUser);

// SECURED ROUTES (user must be login to access these routes)

userRouter.route("/logout").post(verifyJwt, logOutUser);
userRouter.route("/get-current-user").get(verifyJwt, getCurrentUser);
export default userRouter;