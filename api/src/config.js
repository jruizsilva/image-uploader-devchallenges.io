import { config } from "dotenv";
config();

module.exports = {
  LOCAL_DB_HOST: process.env.LOCAL_DB_HOST || "localhost",
  LOCAL_DB_NAME: process.env.LOCAL_DB_NAME || "image_uploader",
  LOCAL_DB_USER: process.env.LOCAL_DB_USER || "postgres",
  LOCAL_DB_PASSWORD: process.env.LOCAL_DB_PASSWORD || "admin",
  LOCAL_DB_PORT: process.env.LOCAL_DB_PORT || 5432,
  PORT: process.env.PORT || 3001,
};
