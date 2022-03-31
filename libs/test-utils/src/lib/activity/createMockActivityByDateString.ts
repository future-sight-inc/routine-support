import { Activity, RepeatTypeEnum } from "@routine-support/domains";
import { DateString } from "@routine-support/types";
import { parseDate } from "@routine-support/utils";

export const createMockActivityByDateString = (date: DateString): Activity => {
  const parsedDate = parseDate(date);

  return {
    date: parsedDate,
    coachId: "",
    pictogram: "",
    start: parsedDate,
    end: parsedDate,
    name: "",
    isCommon: true,
    repeatType: RepeatTypeEnum.None,
    confirmation: {},
    students: [],
  };
};
