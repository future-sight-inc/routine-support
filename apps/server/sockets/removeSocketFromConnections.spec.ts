import { Socket } from "socket.io";
import * as uuid from "uuid";
import { SocketConnection } from "../src/main";
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
    const coachId = uuid.v4();
    const socket1: Socket = createMockSocket({ coachId });
    const socket2: Socket = createMockSocket({ coachId });

    addSocketToConnections(connections, socket1);
    addSocketToConnections(connections, socket2);

    removeSocketFromConnections(connections, socket2);

    expect(connections).toStrictEqual([
      { coachId: coachId, sockets: [socket1] },
    ]);
  });

  it("List with one connection which includes one socket", () => {
    const connections: SocketConnection[] = [];
    const coachId = uuid.v4();
    const socket1: Socket = createMockSocket({ coachId });

    addSocketToConnections(connections, socket1);

    removeSocketFromConnections(connections, socket1);

    expect(connections).toStrictEqual([]);
  });

  it("List with two connections", () => {
    const connections: SocketConnection[] = [];
    const socket1: Socket = createMockSocket();
    const socket2: Socket = createMockSocket();

    addSocketToConnections(connections, socket1);
    addSocketToConnections(connections, socket2);

    removeSocketFromConnections(connections, socket1);

    expect(connections).toStrictEqual([
      { coachId: socket2.handshake.auth.coachId, sockets: [socket2] },
    ]);
  });
});
