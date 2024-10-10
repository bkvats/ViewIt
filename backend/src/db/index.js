import mongoose from "mongoose";
export default async function dbConnect() {
    try {
        const dbConnection = await mongoose.connect(`${process.env.MONGODB_URI}/viewit`);
        console.log("DATABASE CONNECTED SUCCESSFULLY ::", dbConnection.connection.host);
    }
    catch (error) {
        console.log("FAILED WHILE CONNECTING TO DATABASE ::", error.message);
        process.exit(1);
    }
}