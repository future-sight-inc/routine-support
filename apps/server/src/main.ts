import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import bearerToken from "express-bearer-token";
import morgan from "morgan";
import path from "path";
import { Server, Socket } from "socket.io";
import {
  addSocketToConnections,
  createEmitByCoachId,
  removeSocketFromConnections,
} from "../sockets";
import "./db/mongodb";
import BaseRouter from "./routes";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bearerToken());
app.use(cors());
app.use(morgan("tiny"));

app.use("/api", BaseRouter);

app.use("/", express.static(path.join(__dirname, "../web")));
app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../web/index.html"));
});

const port = process.env.PORT || 5000;

export const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api 🚀`);
});

server.on("error", console.error);

export const io = new Server(server);

export interface SocketConnection {
  coachId: string;
  sockets: Socket[];
}

export const connections: SocketConnection[] = [];

io.on("connection", (socket) => {
  addSocketToConnections(connections, socket);

  socket.on("disconnect", () => {
    removeSocketFromConnections(connections, socket);
  });
});

export const emitByCoachId = createEmitByCoachId(connections);
