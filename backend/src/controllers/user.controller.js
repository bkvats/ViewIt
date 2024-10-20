import { options } from "../constants.js";
import { User } from "../models/user.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
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
})
export {isUserNameAvailable, isemailAvailable, registerUser, logInUser, logOutUser, getCurrentUser};