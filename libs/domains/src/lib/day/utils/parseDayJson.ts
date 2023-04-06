import { parseDate } from "@routine-support/utils";
import { parseActivityJson } from "../../activity";
import { Day, DayJson } from "../types";

export const parseDayJson = (json: DayJson): Day => {
  return {
    ...json,
    date: parseDate(json.date),
    activities: json.activities.map(parseActivityJson),
  };
};
