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
    console.log("response from cloud", cloud);
    if (!cloud) return res.status(500).json(ApiResponse(500, "An error occurred while uploading video. Please try again"));
    return res.status(200).json(ApiResponse(200, "Video uploaded succesfully", cloud));
});
const deleteVideo = asyncHandler(async (req, res) => {
    const fileUrl = req.body;
    if (!fileUrl) return res.status(400).json(ApiResponse(400, "Url not found"));
    const temp = user.fileUrl.split("/");
    const publicId = temp[temp.length - 1].replace(".mp4", "");
    await cloudinaryDestory(publicId);
    return res.status(200).json(ApiResponse(200, "Video deleted successfully"));
})
export { uploadVideo, deleteVideo };