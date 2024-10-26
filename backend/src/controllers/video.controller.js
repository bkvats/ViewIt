import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import cloudinaryDestory from "../utils/cloudinaryDestroy.js";
import cloudinaryUpload from "../utils/cloudinaryUpload.js";

const uploadVideo = asyncHandler(async (req, res) => {
    const videoLocalFilePath = req.file?.path;
    if (!videoLocalFilePath) return res.status(400).json(ApiResponse(400, "Video file is required"));
    const cloud = await cloudinaryUpload(videoLocalFilePath, {
        resource_type: "video"
    });
    if (!cloud) return res.status(500).json(ApiResponse(500, "An error occurred while uploading video. Please try again"));
    return res.status(200).json(ApiResponse(200, "Video uploaded succesfully", cloud));
});
export {uploadVideo};