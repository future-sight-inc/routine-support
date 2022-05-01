import { SocketUserTypeEnum } from "@routine-support/types";
import * as uuid from "uuid";

export const createMockSocket = (
  data?: Partial<{ id: string; userId: string; userType: SocketUserTypeEnum }>
): any => {
  return {
    id: data?.id || uuid.v4(),
    handshake: {
      auth: {
        userId: data?.userId || uuid.v4(),
        userType: data?.userType || SocketUserTypeEnum.Coach,
      },
    },
  };
};
