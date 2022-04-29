import { Socket } from "socket.io";
import { SocketConnection } from "../src/types/Socket";

export const removeSocketFromConnections = (
  connections: SocketConnection[],
  socket: Socket
) => {
  const { userId } = socket.handshake.auth;

  if (userId) {
    const connection = connections.find(
      (connection) => connection.userId === userId
    );

    if (connection) {
      connection.sockets = connection.sockets.filter(
        (connectionSocket) => connectionSocket.id !== socket.id
      );
      const shouldDeleteConnection = connection?.sockets.length === 0;

      if (shouldDeleteConnection) {
        const connectionIndex = connections.findIndex(
          (connection) => connection.userId === userId
        );

        connections.splice(connectionIndex, 1);
      }
    }
  }
};
