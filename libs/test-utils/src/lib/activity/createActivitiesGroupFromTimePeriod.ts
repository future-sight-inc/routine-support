import { ActivitiesGroup } from "@routine-support/domains";
import { parseTime } from "@routine-support/utils";

export const createActivitiesGroupFromTimePeriod = ({
  start,
  end,
}: {
  start: string;
  end: string;
}): ActivitiesGroup => {
  return {
    start: parseTime(start),
    end: parseTime(end),
    activities: [],
  };
};
