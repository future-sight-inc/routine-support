import { parseDate } from "@routine-support/utils";
import { Activity, ActivityJson } from "../types";

export const parseActivityJson = (json: ActivityJson): Activity => {
  return {
    ...json,
    date: parseDate(json.date),
    start: parseDate(json.start),
    end: parseDate(json.end),
  };
};
