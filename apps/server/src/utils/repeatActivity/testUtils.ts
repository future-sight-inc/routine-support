import { Activity, RepeatTypeEnum } from "@routine-support/domains";
import { DateString } from "@routine-support/types";
import { parseDate } from "@routine-support/utils";
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

export const getDayNameFromActivity = (activity: Activity): string => {
  return activity.date.format("dddd");
};
