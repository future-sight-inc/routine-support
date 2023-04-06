import { parseDate } from "@routine-support/utils";
import { parseDayJson } from "../../day";
import { Week, WeekJson } from "../types";

export const parseWeekJson = (json: WeekJson): Week => {
  return {
    ...json,
    days: json.days.map(parseDayJson),
    weekInfo: {
      ...json.weekInfo,
      days: json.weekInfo.days.map(parseDate),
    },
  };
};
