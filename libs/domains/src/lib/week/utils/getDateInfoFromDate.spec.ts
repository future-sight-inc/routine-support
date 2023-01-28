import { parseDate } from "@routine-support/utils";
import { getDateInfoFromDate } from "./getDateInfoFromDate";
import {
  FIRST_WEEK_OF_YEAR,
  FIRST_WEEK_OF_YEAR_INFO,
  WEEK_BETWEEN_MONTHS,
  WEEK_BETWEEN_MONTHS_INFO,
  WEEK_BETWEEN_YEARS,
  WEEK_BETWEEN_YEARS_INFO,
  WEEK_OF_MONTH,
  WEEK_OF_MONTH_INFO,
} from "./mocks";

describe("getDateInfoFromDate", () => {
  it("Regular week", () => {
    const mondayDateString = WEEK_OF_MONTH[0];
    const mondayMoment = parseDate(mondayDateString);

    expect(getDateInfoFromDate(mondayMoment)).toStrictEqual(
      WEEK_OF_MONTH_INFO
    );
  });

  it("Week between months", () => {
    const mondayDateString = WEEK_BETWEEN_MONTHS[0];
    const mondayMoment = parseDate(mondayDateString);

    expect(getDateInfoFromDate(mondayMoment)).toStrictEqual(
      WEEK_BETWEEN_MONTHS_INFO
    );
  });

  it("Last week of year", () => {
    const mondayDateString = WEEK_BETWEEN_YEARS[0];
    const mondayMoment = parseDate(mondayDateString);

    expect(getDateInfoFromDate(mondayMoment)).toStrictEqual(
      WEEK_BETWEEN_YEARS_INFO
    );
  });

  it("First week of year", () => {
    const mondayDateString = FIRST_WEEK_OF_YEAR[0];
    const mondayMoment = parseDate(mondayDateString);

    expect(getDateInfoFromDate(mondayMoment)).toStrictEqual(
      FIRST_WEEK_OF_YEAR_INFO
    );
  });
});
