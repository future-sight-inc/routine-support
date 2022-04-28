import { SocketConnection } from "../src/main";

export const removeSocketFromConnections = (
  connections: SocketConnection[],
  socket
) => {
  const { coachId } = socket.handshake.auth;

  if (coachId) {
    const connection = connections.find(
      (connection) => connection.coachId === coachId
    );

    if (connection) {
      connection.sockets = connection.sockets.filter(
        (connectionSocket) => connectionSocket.id !== socket.id
      );
      const shouldDeleteConnection = connection?.sockets.length === 0;

      if (shouldDeleteConnection) {
        const connectionIndex = connections.findIndex(
          (connection) => connection.coachId === coachId
        );

        connections.splice(connectionIndex, 1);
      }
    }
  }
};
