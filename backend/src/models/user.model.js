import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String
    },
    email: {
        type: String, 
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true,
        default: "https://res.cloudinary.com/duhmeadz6/image/upload/v1728580223/user-default-avatar_bvvdhh.png",
    },
    coverImage: {
        type: String
    },
    watchHistory: {
        type: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: "Video"
            }]
    }
}, {timestamps: true});
userSchema.pre("save", async function(next) {
    if (this.isModified("password")) this.password = await bcrypt.hash(this.password, 8);
    next();
});
userSchema.methods.checkPassword = async (password) => {
    return await bcrypt.compare(this.password, password);
}
userScheam.methods.generateAccessToken = function() {
    return jwt.sign({
        _id: this._id
    }, process.env.ACCESS_TOKEN_SECRET);
}
export const User = mongoose.model("User", userSchema);