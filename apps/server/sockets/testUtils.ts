import * as uuid from "uuid";

export const createMockSocket = (
  data?: Partial<{ id: string; coachId: string }>
): any => {
  return {
    id: data?.id || uuid.v4(),
    handshake: {
      auth: {
        coachId: data?.coachId || uuid.v4(),
      },
    },
  };
};
