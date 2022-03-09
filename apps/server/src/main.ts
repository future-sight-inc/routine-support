import express from "express";
import BaseRouter from "./routes";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";
import bearerToken from "express-bearer-token";
import "./db/mongodb";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bearerToken());
app.use(cors());
app.use(morgan("tiny"));

app.use("/api", BaseRouter);

const port = process.env.NX_SERVER_PORT || 5000;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api 🚀`);
});
server.on("error", console.error);
