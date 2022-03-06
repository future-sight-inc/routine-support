import { Activity } from "@routine-support/models";
import { stringifyDate } from "@routine-support/utils";
import { WEEK_OF_MONTH } from "../mocks";
import {
  createMockActivityByDateString,
  createMockWeekFormDateStringArray,
} from "../testUtils";
import { getDayNumbersFromWeek } from "../utils/getDayNumbersFromWeek";

export const repeatActivityThisMonth = (
  activity: Activity,
  daysOfCurrentWeek: moment.Moment[]
): Activity | undefined => {
  const dayNumbersOfWeek = getDayNumbersFromWeek(daysOfCurrentWeek);
  const activityDayNumber = activity.date.date();
  const repeatActivityDayIndex = dayNumbersOfWeek.indexOf(activityDayNumber);
  const shouldRepeatActivity = repeatActivityDayIndex !== -1;

  if (shouldRepeatActivity) {
    return { ...activity, date: daysOfCurrentWeek[repeatActivityDayIndex] };
  }

  return undefined;
};

describe("repeatActivityThisMonth", () => {
  it("Current week includes original date - Monday. Should return 07.03.2022", () => {
    const activity = repeatActivityThisMonth(
      createMockActivityByDateString("07.03.2022"),
      createMockWeekFormDateStringArray(WEEK_OF_MONTH)
    );

    expect(stringifyDate(activity.date)).toBe("07.03.2022");
  });

  it("Current week includes original date - Sunday. Should return 13.03.2022", () => {
    const activity = repeatActivityThisMonth(
      createMockActivityByDateString("13.03.2022"),
      createMockWeekFormDateStringArray(WEEK_OF_MONTH)
    );

    expect(stringifyDate(activity.date)).toBe("13.03.2022");
  });

  it("Original date - 07.02.2022, before current week. Should return 07.03.2022", () => {
    const activity = repeatActivityThisMonth(
      createMockActivityByDateString("07.03.2022"),
      createMockWeekFormDateStringArray(WEEK_OF_MONTH)
    );

    expect(stringifyDate(activity.date)).toBe("07.03.2022");
  });

  it("Original date - 14.02.2022. Current week doesn't include 14.03.2022. Should return false", () => {
    const activity = repeatActivityThisMonth(
      createMockActivityByDateString("14.03.2022"),
      createMockWeekFormDateStringArray(WEEK_OF_MONTH)
    );

    expect(activity).toBe(undefined);
  });

  it("Original date - 07.03.2021, 12 months before current week. Should return 07.03.2022", () => {
    const activity = repeatActivityThisMonth(
      createMockActivityByDateString("07.03.2022"),
      createMockWeekFormDateStringArray(WEEK_OF_MONTH)
    );

    expect(stringifyDate(activity.date)).toBe("07.03.2022");
  });

  it("Original date - 14.03.2022, day after current week. Should return undefined", () => {
    const activity = repeatActivityThisMonth(
      createMockActivityByDateString("14.03.2022"),
      createMockWeekFormDateStringArray(WEEK_OF_MONTH)
    );

    expect(activity).toBe(undefined);
  });
});
