import { ColorEnum, Student } from "@routine-support/domains";
import { LanguageEnum } from "@routine-support/types";
import * as uuid from "uuid";

export const createMockStudent = (data?: Partial<Student>): Student => {
  const studentId = uuid.v4();

  return {
    _id: studentId,
    name: "Boris",
    coachId: "",
    color: ColorEnum.Orange,
    pinCode: "",
    clockType: 0,
    language: LanguageEnum.En,
    ...data,
  };
};
