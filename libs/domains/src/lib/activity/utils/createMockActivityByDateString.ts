import { Activity } from "@routine-support/domains";
import { createMockActivity } from "@routine-support/domains";
import { DateString } from "@routine-support/types";
import { parseDate } from "@routine-support/utils";

export const createMockActivityByDateString = (date: DateString): Activity => {
  const parsedDate = parseDate(date);
  const activity = createMockActivity();

  return {
    ...activity,
    date: parsedDate,
    start: parsedDate,
    end: parsedDate,
  };
};
