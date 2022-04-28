import { Socket } from "socket.io";
import * as uuid from "uuid";
import { SocketConnection } from "../src/main";
import { addSocketToConnections } from "./addSocketToConnections";
import { createMockSocket } from "./testUtils";

describe("addSocketToConnections", () => {
  it("Empty list, new socket to add", () => {
    const connections: SocketConnection[] = [];
    const socket: Socket = createMockSocket();

    addSocketToConnections(connections, socket);

    expect(connections).toStrictEqual([
      { coachId: socket.handshake.auth.coachId, sockets: [socket] },
    ]);
  });

  it("List with one connection, create another connection", () => {
    const connections: SocketConnection[] = [];
    const socket1: Socket = createMockSocket();
    const socket2: Socket = createMockSocket();

    addSocketToConnections(connections, socket1);
    addSocketToConnections(connections, socket2);

    expect(connections).toStrictEqual([
      { coachId: socket1.handshake.auth.coachId, sockets: [socket1] },
      { coachId: socket2.handshake.auth.coachId, sockets: [socket2] },
    ]);
  });

  it("List with one connection, add socket to connection", () => {
    const connections: SocketConnection[] = [];
    const coachId = uuid.v4();
    const socket1: Socket = createMockSocket({ coachId });
    const socket2: Socket = createMockSocket({ coachId });

    addSocketToConnections(connections, socket1);
    addSocketToConnections(connections, socket2);

    expect(connections).toStrictEqual([
      { coachId: coachId, sockets: [socket1, socket2] },
    ]);
  });

  it("Duplicate of socket", () => {
    const connections: SocketConnection[] = [];
    const socket: Socket = createMockSocket();

    addSocketToConnections(connections, socket);
    addSocketToConnections(connections, socket);

    expect(connections).toStrictEqual([
      { coachId: socket.handshake.auth.coachId, sockets: [socket] },
    ]);
  });
});
