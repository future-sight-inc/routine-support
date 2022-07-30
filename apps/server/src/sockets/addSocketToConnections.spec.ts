import { SocketUserTypeEnum } from "@routine-support/types";
import { Socket } from "socket.io";
import * as uuid from "uuid";
import { SocketConnection } from "../types/Socket";
import { addSocketToConnections } from "./addSocketToConnections";
import { createMockSocket } from "./testUtils";

describe("addSocketToConnections", () => {
  it("Empty list, new socket to add", () => {
    const connections: SocketConnection[] = [];
    const socket: Socket = createMockSocket();

    addSocketToConnections(connections, socket);

    expect(connections).toStrictEqual([
      {
        userId: socket.handshake.auth.userId,
        userType: socket.handshake.auth.userType,
        sockets: [socket],
      },
    ]);
  });

  it("List with one connection, create another connection", () => {
    const connections: SocketConnection[] = [];
    const socket1: Socket = createMockSocket({
      userType: SocketUserTypeEnum.Coach,
    });
    const socket2: Socket = createMockSocket({
      userType: SocketUserTypeEnum.Coach,
    });

    addSocketToConnections(connections, socket1);
    addSocketToConnections(connections, socket2);

    expect(connections).toStrictEqual([
      {
        userId: socket1.handshake.auth.userId,
        userType: SocketUserTypeEnum.Coach,
        sockets: [socket1],
      },
      {
        userId: socket2.handshake.auth.userId,
        userType: SocketUserTypeEnum.Coach,
        sockets: [socket2],
      },
    ]);
  });

  it("List with one connection, add socket to connection", () => {
    const connections: SocketConnection[] = [];
    const userId = uuid.v4();
    const socket1: Socket = createMockSocket({
      userId,
      userType: SocketUserTypeEnum.Coach,
    });
    const socket2: Socket = createMockSocket({
      userId,
      userType: SocketUserTypeEnum.Coach,
    });

    addSocketToConnections(connections, socket1);
    addSocketToConnections(connections, socket2);

    expect(connections).toStrictEqual([
      {
        userId,
        userType: SocketUserTypeEnum.Coach,
        sockets: [socket1, socket2],
      },
    ]);
  });

  it("Duplicate of socket", () => {
    const connections: SocketConnection[] = [];
    const socket: Socket = createMockSocket();

    addSocketToConnections(connections, socket);
    addSocketToConnections(connections, socket);

    expect(connections).toStrictEqual([
      {
        userId: socket.handshake.auth.userId,
        userType: SocketUserTypeEnum.Coach,
        sockets: [socket],
      },
    ]);
  });
});
