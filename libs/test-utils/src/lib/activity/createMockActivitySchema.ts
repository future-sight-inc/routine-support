import { ActivitySchema, RepeatTypeEnum } from "@routine-support/domains";

export const createMockActivitySchema = (): ActivitySchema => {
  return {
    date: "",
    coachId: "",
    pictogram: "",
    start: "",
    end: "",
    name: "",
    isCommon: true,
    repeatType: RepeatTypeEnum.None,
    confirmation: {},
    students: [],
  };
};
