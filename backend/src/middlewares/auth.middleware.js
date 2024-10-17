import { User } from "../models/user.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
export const verifyJwt = asyncHandler(async (req, res, next) => {
    const inputToken = req.cookies?.aToken;
    if (!inputToken) return res.status(400).json(ApiResponse(400, "Unauthorised access"));
    const decodedToken = jwt.verify(inputToken, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decodedToken?._id).select("-password");
    if (!user) return res.status(401).json(ApiResponse(401, "Invalid access token"));
    req.user = user;
    next();
})