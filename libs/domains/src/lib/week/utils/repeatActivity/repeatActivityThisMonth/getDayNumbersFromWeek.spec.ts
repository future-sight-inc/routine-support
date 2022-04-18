import { createMockWeekFromDateStringArray } from "@routine-support/test-utils";
import {
  WEEK_BETWEEN_MONTHS,
  WEEK_BETWEEN_YEARS,
  WEEK_OF_MONTH,
} from "../../mocks";
import { getDayNumbersFromWeek } from "./getDayNumbersFromWeek";

const DAY_NUMBERS_OF_WEEK_OF_MONTH = [7, 8, 9, 10, 11, 12, 13];
const DAY_NUMBERS_OF_WEEK_BETWEEN_MONTHS = [28, 1, 2, 3, 4, 5, 6];
const DAY_NUMBERS_OF_WEEK_BETWEEN_YEARS = [27, 28, 29, 30, 31, 1, 2];

describe("getMonthsOfWeek", () => {
  it("Week of one month", () => {
    const week = createMockWeekFromDateStringArray(WEEK_OF_MONTH);

    expect(getDayNumbersFromWeek(week)).toStrictEqual(
      DAY_NUMBERS_OF_WEEK_OF_MONTH
    );
  });

  it("Week between two months", () => {
    const week = createMockWeekFromDateStringArray(WEEK_BETWEEN_MONTHS);

    expect(getDayNumbersFromWeek(week)).toStrictEqual(
      DAY_NUMBERS_OF_WEEK_BETWEEN_MONTHS
    );
  });

  it("Week between two months", () => {
    const week = createMockWeekFromDateStringArray(WEEK_BETWEEN_YEARS);

    expect(getDayNumbersFromWeek(week)).toStrictEqual(
      DAY_NUMBERS_OF_WEEK_BETWEEN_YEARS
    );
  });
});
