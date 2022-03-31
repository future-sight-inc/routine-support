import { Student } from "@routine-support/domains";
import { LanguageEnum } from "@routine-support/types";
import * as uuid from "uuid";

export const createMockStudent = (): Student => {
  const studentId = uuid.v4();

  return {
    _id: studentId,
    name: "",
    coachId: "",
    color: "#bebebe",
    pinCode: "",
    clockType: 0,
    language: LanguageEnum.En,
  };
};
