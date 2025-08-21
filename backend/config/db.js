import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MONGO_DB is connected");
  } catch (error) {
    console.error(error);
    console.log("error");
    process.exit(1);
  }
};

export default connectDB;
