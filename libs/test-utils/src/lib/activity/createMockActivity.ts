import { Activity, RepeatTypeEnum } from "@routine-support/domains";
import { MOCK_DATE } from "./constants";

export const createMockActivity = (): Activity => {
  return {
    _id: "",
    coachId: "",
    name: "",
    pictogram: "",
    date: MOCK_DATE,
    start: MOCK_DATE,
    end: MOCK_DATE,
    repeatType: RepeatTypeEnum.None,
    isImportant: false,
    isCommon: true,
    students: [],
    confirmation: {},
  };
};
