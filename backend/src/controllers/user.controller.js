import { User } from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const isUserNameAvailable = asyncHandler(async (req, res) => {
    const {username} = req.query;
    if (!username) res.status(400).json(ApiResponse(400, "Email not found"));
    else {
        const available = await User.findOne({username});
        res.status(200).json(ApiResponse(200, available ? false : true));
    }
});
const isemailAvailable = asyncHandler(async (req, res) => {
    const {email} = req.query;
    if (!email) return res.status(400).json(ApiResponse(400, "Email not found"));
    const available = await User.findOne({email});
    return res.status(200).json(ApiResponse(200, available ? false : true));
})
export {isUserNameAvailable, isemailAvailable};