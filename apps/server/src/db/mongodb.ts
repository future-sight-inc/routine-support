import mongoose, { plugin } from "mongoose";
import { createMongoosePluginObjectIdToString } from "./plugins";

mongoose.connect(process.env.DB_CONNECTION_STRING || "");

export const db = mongoose.connection;

plugin(createMongoosePluginObjectIdToString());

db.on("error", console.error.bind(console, "❌ Connection error:"));

db.once("open", () => {
  console.log("Mongo connected 🔌");
});
