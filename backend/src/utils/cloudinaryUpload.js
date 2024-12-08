import {v2 as cloudinary} from "cloudinary";
import fs from "fs";
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
export default async function cloudinaryUpload(localFilePath) {
    try {
        if (localFilePath) {
            const result = await cloudinary.uploader.upload(localFilePath, {resource_type: "auto"});
            fs.unlinkSync(localFilePath);
            return result;
        }
    } catch (error) {
        fs.unlinkSync(localFilePath);
        console.log(error.message);
    }
}