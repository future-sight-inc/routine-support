import { Socket } from "socket.io";
import { SocketConnection } from "../types/Socket";

export const addSocketToConnections = (connections: SocketConnection[], socket: Socket) => {
  const { userId, userType } = socket.handshake.auth;

  if (userId) {
    const connection = connections.find((connection) => connection.userId === userId);

    if (connection) {
      const shouldAddConnection = !connection.sockets.some(
        (socketToCheck) => socketToCheck.id === socket.id
      );

      if (shouldAddConnection) {
        connection.sockets.push(socket);
      }
    } else {
      connections.push({
        userId,
        userType,
        sockets: [socket],
      });
    }
  }
};
