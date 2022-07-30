import {
  createMockActivityByDateString,
  createMockWeekFromDateStringArray,
} from "@routine-support/domains";
import { stringifyDate } from "@routine-support/utils";
import { WEEK_BETWEEN_MONTHS, WEEK_INCLUDES_SPECIAL_DATE, WEEK_OF_MONTH } from "../../mocks";
import { repeatActivityThisYear } from "./repeatActivityThisYear";

describe("repeatActivityThisYear", () => {
  it("Current week includes original date", () => {
    const activity = repeatActivityThisYear(
      createMockActivityByDateString("07.03.2022"),
      createMockWeekFromDateStringArray(WEEK_OF_MONTH)
    );
    const activityDate = activity ? stringifyDate(activity.date) : "";

    expect(activityDate).toBe("07.03.2022");
  });

  it("Current week includes date 1 year after", () => {
    const activity = repeatActivityThisYear(
      createMockActivityByDateString("07.03.2021"),
      createMockWeekFromDateStringArray(WEEK_OF_MONTH)
    );
    const activityDate = activity ? stringifyDate(activity.date) : "";

    expect(activityDate).toBe("07.03.2022");
  });

  it("Current week includes date 2 years after", () => {
    const activity = repeatActivityThisYear(
      createMockActivityByDateString("10.03.2020"),
      createMockWeekFromDateStringArray(WEEK_OF_MONTH)
    );
    const activityDate = activity ? stringifyDate(activity.date) : "";

    expect(activityDate).toBe("10.03.2022");
  });

  it("Original date is 29 Feb and current week 2 year after", () => {
    const activity = repeatActivityThisYear(
      createMockActivityByDateString("29.02.2020"),
      createMockWeekFromDateStringArray(WEEK_BETWEEN_MONTHS)
    );
    const activityDate = activity ? stringifyDate(activity.date) : "";

    expect(activityDate).toBe("01.03.2022");
  });

  it("Original date is 29 Feb and current week 4 year after", () => {
    const activity = repeatActivityThisYear(
      createMockActivityByDateString("29.02.2020"),
      createMockWeekFromDateStringArray(WEEK_INCLUDES_SPECIAL_DATE)
    );
    const activityDate = activity ? stringifyDate(activity.date) : "";

    expect(activityDate).toBe("29.02.2024");
  });

  it("Original date is 29 Feb, current week after date", () => {
    const activity = repeatActivityThisYear(
      createMockActivityByDateString("29.02.2020"),
      createMockWeekFromDateStringArray(WEEK_BETWEEN_MONTHS)
    );
    const activityDate = activity ? stringifyDate(activity.date) : "";

    expect(activityDate).toBe("01.03.2022");
  });

  it("Original date is 29 Feb, current week before date", () => {
    const activity = repeatActivityThisYear(
      createMockActivityByDateString("29.02.2024"),
      createMockWeekFromDateStringArray(WEEK_BETWEEN_MONTHS)
    );
    const activityDate = activity ? stringifyDate(activity.date) : "";

    expect(activityDate).toBe("");
  });

  it("Current week after date", () => {
    const activity = repeatActivityThisYear(
      createMockActivityByDateString("12.12.2021"),
      createMockWeekFromDateStringArray(WEEK_BETWEEN_MONTHS)
    );
    const activityDate = activity ? stringifyDate(activity.date) : "";

    expect(activityDate).toBe("");
  });

  it("Current week before date", () => {
    const activity = repeatActivityThisYear(
      createMockActivityByDateString("08.03.2022"),
      createMockWeekFromDateStringArray(WEEK_BETWEEN_MONTHS)
    );
    const activityDate = activity ? stringifyDate(activity.date) : "";

    expect(activityDate).toBe("");
  });
});
