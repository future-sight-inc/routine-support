import { Coach } from "../types";
import * as uuid from "uuid";

export const createMockCoach = (data?: Partial<Coach>): Coach => {
  return {
    _id: uuid.v4(),
    name: "Boris",
    email: "boris@gmail.com",
    ...data,
  };
};
