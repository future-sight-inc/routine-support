import { ActivitySchema, RepeatTypeEnum } from "@routine-support/domains";

export const createMockActivitySchema = (
  data?: Partial<ActivitySchema>
): ActivitySchema => {
  return {
    _id: "",
    date: "27.11.1997",
    coachId: "",
    pictogram: "",
    start: "12:00",
    end: "13:00",
    name: "",
    isCommon: true,
    isImportant: false,
    repeatType: RepeatTypeEnum.None,
    confirmation: {},
    students: [],
    ...data,
  };
};
