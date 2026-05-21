import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


async function connectDB(){
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

    } catch (error) {
        console.error("Error:",error)
        process.exit(1)
    }
}

export default connectDB




