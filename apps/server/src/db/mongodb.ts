import mongoose = require("mongoose");

mongoose.connect(process.env.CONNECTION_STRING || "");

export const db = mongoose.connection;

db.on("error", console.error.bind(console, "❌ Connection error:"));

db.once("open", () => {
  console.log("Mongo connected 🔌");
});