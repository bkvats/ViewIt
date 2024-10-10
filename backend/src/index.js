import "dotenv/config";
import app from "./app.js";
import dbConnect from "./db/index.js";
await dbConnect();
app.listen(process.env.PORT, () => {
    console.log("Server is running on port:", process.env.PORT);
});