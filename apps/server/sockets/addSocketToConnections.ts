import { Socket } from "socket.io";
import { SocketConnection } from "../src/main";

export const addSocketToConnections = (
  connections: SocketConnection[],
  socket: Socket
) => {
  const { coachId } = socket.handshake.auth;

  if (coachId) {
    const connection = connections.find(
      (connection) => connection.coachId === coachId
    );

    if (connection) {
      const shouldAddConnection = !connection.sockets.some(
        (socketToCheck) => socketToCheck.id === socket.id
      );

      if (shouldAddConnection) {
        connection.sockets.push(socket);
      }
    } else {
      connections.push({
        coachId,
        sockets: [socket],
      });
    }
  }
};
