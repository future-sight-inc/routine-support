import { stringifyDate } from "@routine-support/utils";
import { stringifyActivity } from "../../activity";
import { Day, DayJson } from "../types";

export const stringifyDay = (day: Day): DayJson => {
  return {
    ...day,
    date: stringifyDate(day.date),
    activities: day.activities.map(stringifyActivity),
  };
};
