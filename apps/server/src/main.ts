import express from "express";
import BaseRouter from "./routes";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";
import bearerToken from "express-bearer-token";
import "./db/mongodb";
import morgan from "morgan";
import path from "path";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bearerToken());
app.use(cors());
app.use(morgan("tiny"));

app.use("/api", BaseRouter);
app.use(express.static(path.join(__dirname, "../web")));
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../web/index.html"));
});

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api 🚀`);
});

server.on("error", console.error);
