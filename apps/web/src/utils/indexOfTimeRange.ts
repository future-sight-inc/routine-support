import { Moment } from "moment";
import { TimeRange } from "types/main";

export const indexOfTimeRange = (
  timeRange: TimeRange,
  time: Moment
): number => {
  return timeRange.findIndex((timeString) =>
    new RegExp(`^${time.get("hours")}:00`).test(timeString)
  );
};
