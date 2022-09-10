import "dotenv/config";
export const DB_URL = process.env.DB_URL as string;
export const PORT = process.env.PORT;
export const JWT_SECRET = process.env.JWT_SECRET;
export const ADMIN_NAME = process.env.ADMIN_NAME;
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
