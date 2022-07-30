import { SocketUserTypeEnum } from "@routine-support/types";
import { Socket } from "socket.io";

export interface SocketConnection {
  userId: string;
  userType: SocketUserTypeEnum;
  sockets: Socket[];
}
