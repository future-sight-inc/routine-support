/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from "express";
import BaseRouter from "./routes";
import cookieParser = require("cookie-parser");
import cors = require("cors");
import bodyParser = require("body-parser");
import bearerToken = require("express-bearer-token");
import "./db/mongodb";
import morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bearerToken());
app.use(cors());
app.use(morgan('tiny'));

app.use("/api", BaseRouter);

const port = process.env.port || 5000;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api 🚀`);
});
server.on("error", console.error);
