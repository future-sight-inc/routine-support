import { parseDate, parseTime } from "@routine-support/utils";
import { Activity, ActivityJson } from "../types";

export const parseActivityJson = (json: ActivityJson): Activity => {
  const date = parseDate(json.date);

  return {
    ...json,
    date,
    start: parseTime(json.start, date),
    end: parseTime(json.end, date),
  };
};
