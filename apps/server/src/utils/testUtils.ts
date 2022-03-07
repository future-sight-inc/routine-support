import { Activity, RepeatTypeEnum } from "@routine-support/domains";
import { DateString } from "@routine-support/types";
import { parseDate } from "@routine-support/utils";
import moment from "moment";
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
    repeatType: RepeatTypeEnum.None,
    confirmation: {},
  };
};

export const createMockActivityByRepeatType = (repeatType: RepeatTypeEnum) => {
  const mockedDate = moment();

  return {
    date: mockedDate,
    coachId: "",
    pictogram: "",
    start: mockedDate,
    end: mockedDate,
    name: "",
    repeatType,
    confirmation: {},
  };
};

export const createMockWeekFormDateStringArray = (
  dates: DateString[]
): Moment[] => {
  return dates.map(parseDate);
};

export const getDayNameFromActivity = (activity: Activity): string => {
  return activity.date.format("dddd");
};
