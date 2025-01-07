import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const mongoDataBase = mongoose.connect(
  process.env.MONGODB_URI as string
);
