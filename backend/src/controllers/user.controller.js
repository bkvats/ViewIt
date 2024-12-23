import { options } from "../constants.js";
import { User } from "../models/user.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import cloudinaryDestory from "../utils/cloudinaryDestroy.js";
import cloudinaryUpload from "../utils/cloudinaryUpload.js";

const isUserNameAvailable = asyncHandler(async (req, res) => {
    const {username} = req.query;
    if (!username) res.status(400).json(ApiResponse(400, "Email not found"));
    else {
        const available = await User.findOne({username});
        res.status(200).json(ApiResponse(200, `Username is${available ? " not" : ""} available`, available ? false : true));
    }
});
const isemailAvailable = asyncHandler(async (req, res) => {
    const {email} = req.query;
    if (!email) return res.status(400).json(ApiResponse(400, "Email not found"));
    const available = await User.findOne({email});
    return res.status(200).json(ApiResponse(200, `Email is${available ? " not" : ""} available`, available ? false : true));
});
const registerUser = asyncHandler(async (req, res) => {
    const {firstname, lastname, email, username, password} = req.body;
    if ([firstname, lastname, email, username, password].some((i) => i ? i.trim() === "" : true)) return res.status(400).json(ApiResponse(400, "All fields are required"));
    const avatarLocalPath = req.file?.path;
    let cloud = undefined;
    if (avatarLocalPath) {
        cloud = await cloudinaryUpload(avatarLocalPath);
    }
    const user = await User.create({firstname, lastname, email, username, password, avatar: cloud?.url});
    const isUserCreated = await User.findById(user._id).select("-password");
    if (isUserCreated) return res.status(200).json(ApiResponse(200, "User registered successfully", isUserCreated));
    return res.status(400).json(ApiResponse(500, "Something went wrong while registering user"));
});
const logInUser = asyncHandler(async (req, res) => {
    const {identifier, password} = req.body;
    if (!identifier || !password) return res.status(400).json(ApiResponse(400, "All fields are required"));
    const user = await User.findOne({$or: [{email: identifier}, {username: identifier}]});
    if (!user) return res.status(404).json(ApiResponse(404, "User not found"));
    if (!await user.checkPassword(password)) return res.status(400).json(ApiResponse(400, "Wrong Password. Try again"));
    const accessToken = await user.generateAccessToken();
    return res.status(200).cookie("aToken", accessToken, options).json(ApiResponse(200, "Logged in successfully", true));
});
const logOutUser = asyncHandler(async (req, res) => {
    return res.status(200).clearCookie("aToken", options).json(ApiResponse(200, "Logged out successfully"));
});
const getCurrentUser = asyncHandler(async (req, res) => {
    return res.status(200).json(ApiResponse(200, "User fetched successfully", req.user));
});
const updateCoverImage = asyncHandler(async (req, res) => {
    const coverImageLocalPath = req.file?.path;
    if (!coverImageLocalPath) return res.status(400).json(ApiResponse(400, "Cover image is required."));
    const cloud = await cloudinaryUpload(coverImageLocalPath);
    if (!cloud) return res.status(500).json(ApiResponse(500, "An error occured while uploading image."));
    const user = await User.findById(req.user._id);
    if (user.coverImage) {
        const temp = user.coverImage.split("/");
        const publicId = temp[temp.length - 1].replace(".jpg", "");
        await cloudinaryDestory(publicId);
        await User.findByIdAndUpdate(req.user._id, {
            $unset: {
                coverImage: 1
            }},
            {new: true}
        );
    }
    user.coverImage = cloud?.url;
    await user.save({validateBeforeSave: false});
    return res.status(200).json(ApiResponse(200, "Successfully set cover image."));
});
const removeCoverImage = asyncHandler(async (req, res) => {
    const user = req.user;
    if (user.coverImage) {
        const temp = user.coverImage.split("/");
        const publicId = temp[temp.length - 1].replace(".jpg", "");
        await cloudinaryDestory(publicId);
        await User.findByIdAndUpdate(req.user._id, {
            $unset: {
                coverImage: 1
            }},
            {new: true}
        );
    }
    return res.status(200).json(ApiResponse(200, "Successfully removed cover image.", true));
})
const updateAvatar = asyncHandler(async (req, res) => {
    const avatarLocalPath = req.file?.path;
    if (!avatarLocalPath) return res.status(400).json(ApiResponse(400, "Avatar is required."));
    const defaultAvatarUrl = "https://res.cloudinary.com/duhmeadz6/image/upload/v1728580223/user-default-avatar_bvvdhh.png";
    const cloud = await cloudinaryUpload(avatarLocalPath);
    if (!cloud) return res.status(500).json(ApiResponse(500, "An error occured while uploading image."));
    const user = req.user;
    if (req.user.avatar != defaultAvatarUrl) {
        const temp = req.user.avatar.split("/");
        const publicId = temp[temp.length - 1].replace(".jpg", "");
        await cloudinaryDestory(publicId);
    }
    user.avatar = cloud?.url;
    await user.save({validateBeforeSave: false});
    return res.status(200).json(ApiResponse(200, "Successfully updated avatar."));
});
const removeAvatar = asyncHandler(async (req, res) => {
    const user = req.user;
    const defaultAvatarUrl = "https://res.cloudinary.com/duhmeadz6/image/upload/v1728580223/user-default-avatar_bvvdhh.png";
    if (user.avatar != defaultAvatarUrl) {
        const temp = user.avatar.split("/");
        const publicId = temp[temp.length - 1].replace(".jpg", "");
        await cloudinaryDestory(publicId);
    }
    await User.findByIdAndUpdate(user._id, {
        $unset: {
            avatar: 1
        }
    }, {new: true});
    return res.status(200).json(ApiResponse(200, "Successfully removed avatar."));
});
const updateFirstAndLastName = asyncHandler(async (req, res) => {
    const {firstname, lastname} = req.body;
    if (!firstname) return res.status(400).json(ApiResponse(400, "First name is required"));
    const user = await User.findByIdAndUpdate(req.user._id, {
        $set: {
            firstname,
            lastname
        }
    }, {new: true});
    if (!user) return res.status(500).json(ApiResponse(500, "An error occured please try again"));
    return res.status(200).json(ApiResponse(200, "Data updated successfully"));
});
const getUserChannelProfile = asyncHandler(async (req, res) => {
    const {username} = req.params;
    if (!username) return res.status(400).json(ApiResponse(400, "Username is required"));
    // const channelData = await User.aggregate([
    //     {
    //         $match: {
    //             username: username
    //         }
    //     },
    //     {
    //         $lookup: {
    //             from: "subscription",
    //             localField: "_id",
    //             foreignField: "subscribedTo",
    //             as: "subscribers"
    //         }
    //     },
    //     {
    //         $addFields: {
    //             numberOfSubscribers: {
    //                 $size: "$subscribers"
    //             }
    //         }
    //     },
    //     {
    //         $project: {
    //             firstname: 1,
    //             lastname: 1,
    //             username: 1,
    //             avatar: 1,
    //             coverImage: 1,
    //             about: 1,
    //             subscribers: 1,
    //             numberOfSubscriber: 1
    //         }
    //     }
    // ]);
    // if (!channelData) return res.status(404, "No content available on channel");
    // return res.status(200).json(ApiResponse(200, "Channel Data fetched successfully", channelData[0]));
    const user = await User.findOne({username}).select("-password");
    if (!username) return res.status(404).json(ApiResponse(404, "No channel found"));
    return res.status(200).json(ApiResponse(200, "Channel found succesfully", user));
});
export {isUserNameAvailable, isemailAvailable, registerUser, logInUser, logOutUser, getCurrentUser, updateCoverImage, removeCoverImage, updateAvatar, removeAvatar, updateFirstAndLastName, getUserChannelProfile};