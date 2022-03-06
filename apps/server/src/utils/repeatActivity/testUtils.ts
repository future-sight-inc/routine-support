import { DateString } from "@routine-support/types";
import { parseDate } from "@routine-support/utils";
import { Activity, RepeatTypeEnum } from "@routine-support/domains";

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
    confirmation: {},
  };
};

export const createMockWeekFormDateStringArray = (
  dates: DateString[]
): moment.Moment[] => {
  return dates.map(parseDate);
};

export const getDayNameFromActivity = (activity: Activity): string => {
  return activity.date.format("dddd");
};
