import {
  WEEK_BETWEEN_MONTHS,
  WEEK_BETWEEN_YEARS,
  WEEK_OF_MONTH,
} from "../../mocks";
import { createMockWeekFromDateStringArray } from "../testUtils";
import { getDayNumbersFromWeek } from "./getDayNumbersFromWeek";

describe("getMonthsOfWeek", () => {
  it("Week of one month", () => {
    const week = createMockWeekFromDateStringArray(WEEK_OF_MONTH);

    expect(getDayNumbersFromWeek(week)).toStrictEqual([
      7, 8, 9, 10, 11, 12, 13,
    ]);
  });

  it("Week between two months", () => {
    const week = createMockWeekFromDateStringArray(WEEK_BETWEEN_MONTHS);

    expect(getDayNumbersFromWeek(week)).toStrictEqual([28, 1, 2, 3, 4, 5, 6]);
  });

  it("Week between two months", () => {
    const week = createMockWeekFromDateStringArray(WEEK_BETWEEN_YEARS);
    expect(getDayNumbersFromWeek(week)).toStrictEqual([
      27, 28, 29, 30, 31, 1, 2,
    ]);
  });
});
