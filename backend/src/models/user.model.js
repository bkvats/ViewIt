import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String, 
        required: true
    },
    userName: {
        type: String,
        required: true,
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
    refreshToken: {
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
export const User = mongoose.model("User", userSchema);