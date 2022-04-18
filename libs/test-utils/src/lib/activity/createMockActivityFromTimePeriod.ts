import { Activity } from "@routine-support/domains";
import { createMockActivity } from "@routine-support/test-utils";
import { parseTime } from "@routine-support/utils";
import { MOCK_DATE } from "./constants";

export const createMockActivityFromTimePeriod = ({
  start,
  end,
}: {
  start: string;
  end: string;
}): Activity => {
  const activity = createMockActivity();

  return {
    ...activity,
    date: MOCK_DATE,
    start: parseTime(start),
    end: parseTime(end),
  };
};
