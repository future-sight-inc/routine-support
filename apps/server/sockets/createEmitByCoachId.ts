import { SocketConnection } from "../src/main";

export const createEmitByCoachId =
  (connections: SocketConnection[]) =>
    (
      coachId: string,
      message: {
        type: string;
        data?: unknown;
      }
    ) => {
      connections
        .find((connection) => connection.coachId === String(coachId))
        ?.sockets.forEach((socket) => {
          socket.emit(message.type, message.data);
        });
    };
