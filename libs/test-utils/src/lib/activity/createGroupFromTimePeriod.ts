import { parseTime } from "@routine-support/utils";

export const createGroupFromTimePeriod = ({
  start,
  end,
}: {
  start: string;
  end: string;
}) => {
  return {
    start: parseTime(start),
    end: parseTime(end),
    activities: [],
  };
};
