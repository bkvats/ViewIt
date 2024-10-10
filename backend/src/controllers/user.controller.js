import { User } from "../models/user.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const isUserNameAvailable = asyncHandler(async (req, res) => {
    const {userName} = req.body;
    const available = await User.findOne({userName});
    res.status(200).json(ApiResponse(200, available ? false : true));
});
export {isUserNameAvailable};