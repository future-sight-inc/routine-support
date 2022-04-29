import { SocketUserTypeEnum } from "@routine-support/types";
import { SocketConnection } from "../src/types/Socket";

export const createEmitByCoachId = (connections: SocketConnection[]) => {
  return ({
    userId,
    userType,
    message,
  }: {
    userId: string;
    userType: SocketUserTypeEnum;
    message: {
      type: string;
      data?: unknown;
    };
  }) => {
    connections
      .find(
        (connection) =>
          connection.userId === String(userId) &&
          connection.userType === userType
      )
      ?.sockets.forEach((socket) => {
        socket.emit(message.type, message.data);
      });
  };
};
