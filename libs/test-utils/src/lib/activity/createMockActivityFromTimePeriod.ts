import { Activity, RepeatTypeEnum } from "@routine-support/domains";
import { parseTime } from "@routine-support/utils";
import { MOCK_DATE } from "./constants";

export const createMockActivityFromTimePeriod = ({
  start,
  end,
}: {
  start: string;
  end: string;
}): Activity => {
  return {
    _id: "",
    coachId: "",
    name: "",
    pictogram: "",
    date: MOCK_DATE,
    start: parseTime(start),
    end: parseTime(end),
    repeatType: RepeatTypeEnum.None,
    isCommon: true,
    students: [],
    confirmation: {},
  };
};
