import { Activity } from "@routine-support/models";
import {
  WEEK_BETWEEN_MONTHS,
  WEEK_BETWEEN_YEARS,
  WEEK_OF_MONTH,
} from "../mocks";
import {
  createMockActivityByDateString,
  createMockWeekFormDateStringArray,
  getDayNameFromActivity,
} from "../testUtils";

export const repeatActivityThisWeek = (
  activity: Activity,
  daysOfWeek: moment.Moment[]
): Activity | undefined => {
  // todo Решить проблемы с локалью в 22 задаче
  const dayOfWeekIndex = activity.date.locale("ru").weekday();
  const repeatedActivityDate = daysOfWeek[dayOfWeekIndex];

  const shouldRepeatActivity = repeatedActivityDate.isSameOrAfter(
    activity.date
  );

  if (shouldRepeatActivity) {
    return { ...activity, date: repeatedActivityDate };
  }

  return undefined;
};

describe("repeatActivityThisWeek: day of the current week. Should be Monday", () => {
  it("Week of month", () => {
    const activity = repeatActivityThisWeek(
      createMockActivityByDateString("07.03.2022"),
      createMockWeekFormDateStringArray(WEEK_OF_MONTH)
    );

    expect(getDayNameFromActivity(activity)).toBe("Monday");
  });

  it("Week between months", () => {
    const activity = repeatActivityThisWeek(
      createMockActivityByDateString("28.02.2022"),
      createMockWeekFormDateStringArray(WEEK_BETWEEN_MONTHS)
    );

    expect(getDayNameFromActivity(activity)).toBe("Monday");
  });

  it("Week between years", () => {
    const activity = repeatActivityThisWeek(
      createMockActivityByDateString("27.12.2021"),
      createMockWeekFormDateStringArray(WEEK_BETWEEN_YEARS)
    );

    expect(getDayNameFromActivity(activity)).toBe("Monday");
  });
});

describe("repeatActivityThisWeek: day of the current week. Should be Wednesday", () => {
  it("Week of month", () => {
    const activity = repeatActivityThisWeek(
      createMockActivityByDateString("09.03.2022"),
      createMockWeekFormDateStringArray(WEEK_OF_MONTH)
    );

    expect(getDayNameFromActivity(activity)).toBe("Wednesday");
  });

  it("Week between months", () => {
    const activity = repeatActivityThisWeek(
      createMockActivityByDateString("02.03.2022"),
      createMockWeekFormDateStringArray(WEEK_BETWEEN_MONTHS)
    );

    expect(getDayNameFromActivity(activity)).toBe("Wednesday");
  });

  it("Week between years", () => {
    const activity = repeatActivityThisWeek(
      createMockActivityByDateString("29.12.2021"),
      createMockWeekFormDateStringArray(WEEK_BETWEEN_YEARS)
    );

    expect(getDayNameFromActivity(activity)).toBe("Wednesday");
  });
});

describe("repeatActivityThisWeek: day of the current week. Should be Sunday", () => {
  it("Week of month", () => {
    const activity = repeatActivityThisWeek(
      createMockActivityByDateString("13.03.2022"),
      createMockWeekFormDateStringArray(WEEK_OF_MONTH)
    );

    expect(getDayNameFromActivity(activity)).toBe("Sunday");
  });

  it("Week between months", () => {
    const activity = repeatActivityThisWeek(
      createMockActivityByDateString("06.03.2022"),
      createMockWeekFormDateStringArray(WEEK_BETWEEN_MONTHS)
    );

    expect(getDayNameFromActivity(activity)).toBe("Sunday");
  });

  it("Week between years", () => {
    const activity = repeatActivityThisWeek(
      createMockActivityByDateString("02.01.2022"),
      createMockWeekFormDateStringArray(WEEK_BETWEEN_YEARS)
    );

    expect(getDayNameFromActivity(activity)).toBe("Sunday");
  });
});
