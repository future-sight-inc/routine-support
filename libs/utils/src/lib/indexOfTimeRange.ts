import { TimeRange } from "@routine-support/types";
import { Moment } from "moment";

export const indexOfTimeRange = (
  timeRange: TimeRange,
  time: Moment
): number => {
  return timeRange.findIndex((timeString) =>
    new RegExp(`^${time.get("hours")}:00`).test(timeString)
  );
};
