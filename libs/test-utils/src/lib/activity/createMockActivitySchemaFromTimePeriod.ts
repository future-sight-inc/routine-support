import { ActivitySchema, RepeatTypeEnum } from "@routine-support/domains";
import { MOCK_DATE_STRING } from "./constants";

export const createMockActivitySchemaFromTimePeriod = ({
  start,
  end,
}: {
  start: string;
  end: string;
}): ActivitySchema => {
  return {
    _id: "",
    coachId: "",
    name: "",
    pictogram: "",
    date: MOCK_DATE_STRING,
    start,
    end,
    repeatType: RepeatTypeEnum.None,
    isCommon: true,
    students: [],
    confirmation: {},
  };
};
