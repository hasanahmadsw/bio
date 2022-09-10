import mongoose from "mongoose";
import { DB_URL } from "./config";
import logger from "./utils/logger";
export const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    logger.info("Connected to Database!");
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
};
