import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { uploadVideo } from "../controllers/video.controller.js";

const videoRouter = Router();
videoRouter.use(verifyJwt);
videoRouter.route("/upload-video").post(upload.single("videoFile"), uploadVideo);
export default videoRouter;