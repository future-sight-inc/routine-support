import { Activity, RepeatTypeEnum } from "@routine-support/domains";
import { DateString } from "@routine-support/types";
import { parseDate, stringifyDate } from "@routine-support/utils";
import { Moment } from "moment";

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

export const createMockWeekFromDateStringArray = (
  dates: DateString[]
): Moment[] => {
  return dates.map(parseDate);
};

export const getDateStringFromActivity = (activity: Activity): string => {
  return stringifyDate(activity.date);
};
