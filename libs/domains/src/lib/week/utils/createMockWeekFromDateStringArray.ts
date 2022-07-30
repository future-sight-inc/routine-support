import { DateString } from "@routine-support/types";
import { parseDate } from "@routine-support/utils";
import { Moment } from "moment";

export const createMockWeekFromDateStringArray = (dates: DateString[]): Moment[] => {
  return dates.map(parseDate);
};
