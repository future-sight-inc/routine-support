import { stringifyDate } from "@routine-support/utils";
import { getDaysOfWeek } from "./getDaysOfWeek";
import {
  WEEK_BETWEEN_MONTHS,
  WEEK_BETWEEN_MONTHS_INFO,
  WEEK_BETWEEN_YEARS,
  WEEK_BETWEEN_YEARS_INFO,
  WEEK_OF_MONTH,
  WEEK_OF_MONTH_INFO,
} from "./mocks";

describe("getDaysOfWeek", () => {
  it("Week of month", () => {
    const week = getDaysOfWeek(WEEK_OF_MONTH_INFO);

    expect(week.map(stringifyDate)).toStrictEqual(WEEK_OF_MONTH);
  });

  it("Week between months", () => {
    const week = getDaysOfWeek(WEEK_BETWEEN_MONTHS_INFO);

    expect(week.map(stringifyDate)).toStrictEqual(WEEK_BETWEEN_MONTHS);
  });

  it("Week between years", () => {
    const week = getDaysOfWeek(WEEK_BETWEEN_YEARS_INFO);

    expect(week.map(stringifyDate)).toStrictEqual(WEEK_BETWEEN_YEARS);
  });
});
