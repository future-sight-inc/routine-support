import { TimeRange } from "@routine-support/types";
import { getHours } from "date-fns";

export const indexOfTimeRange = (timeRange: TimeRange, time: Date): number => {
  return timeRange.findIndex((timeString) => new RegExp(`^${getHours(time)}:00`).test(timeString));
};
