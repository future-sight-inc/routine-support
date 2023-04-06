import { DateInfo } from "@routine-support/domains";
import { getISOWeek, getYear } from "date-fns";

export const getDateInfoFromDate = (date: Date): DateInfo => {
  return {
    year: getYear(date),
    week: getISOWeek(date),
  };
};
