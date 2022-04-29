import { SocketUserTypeEnum } from "@routine-support/types";
import { Socket } from "socket.io";
import * as uuid from "uuid";
import { SocketConnection } from "../src/types/Socket";
import { addSocketToConnections } from "./addSocketToConnections";
import { removeSocketFromConnections } from "./removeSocketFromConnections";
import { createMockSocket } from "./testUtils";

describe("removeSocketFromConnections", () => {
  it("Empty list, nothing to delete", () => {
    const connections: SocketConnection[] = [];
    const socket: Socket = createMockSocket();

    removeSocketFromConnections(connections, socket);

    expect(connections).toStrictEqual([]);
  });

  it("List with one connection which includes two sockets", () => {
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

    removeSocketFromConnections(connections, socket2);

    expect(connections).toStrictEqual([
      {
        userId,
        userType: SocketUserTypeEnum.Coach,
        sockets: [socket1],
      },
    ]);
  });

  it("List with one connection which includes one socket", () => {
    const connections: SocketConnection[] = [];
    const userId = uuid.v4();
    const socket1: Socket = createMockSocket({
      userId,
      userType: SocketUserTypeEnum.Coach,
    });

    addSocketToConnections(connections, socket1);

    removeSocketFromConnections(connections, socket1);

    expect(connections).toStrictEqual([]);
  });

  it("List with two connections", () => {
    const connections: SocketConnection[] = [];
    const socket1: Socket = createMockSocket({
      userType: SocketUserTypeEnum.Coach,
    });
    const socket2: Socket = createMockSocket({
      userType: SocketUserTypeEnum.Coach,
    });

    addSocketToConnections(connections, socket1);
    addSocketToConnections(connections, socket2);

    removeSocketFromConnections(connections, socket1);

    expect(connections).toStrictEqual([
      {
        userId: socket2.handshake.auth.userId,
        userType: SocketUserTypeEnum.Coach,
        sockets: [socket2],
      },
    ]);
  });
});
