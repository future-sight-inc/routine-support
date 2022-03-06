import { DateString } from "@routine-support/types";
import { parseDate } from "@routine-support/utils";
import { Activity, RepeatTypeEnum } from "@routine-support/models";

export const createMockActivityByDateString = (date: DateString): Activity => {
  const parsedDate = parseDate(date);

  return {
    date: parsedDate,
    coachId: "",
    pictogram: "",
    start: parsedDate,
    end: parsedDate,
    name: "",
    repeat: RepeatTypeEnum.None,
  };
};

export const createMockWeekFormDateStringArray = (
  dates: DateString[]
): moment.Moment[] => {
  return dates.map(parseDate);
};
