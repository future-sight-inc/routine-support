import {
  createMockActivityByDateString,
  createMockWeekFromDateStringArray,
} from "@routine-support/domains";
import { stringifyDate } from "@routine-support/utils";
import { WEEK_OF_MONTH } from "../../mocks";
import { repeatActivityThisMonth } from "./repeatActivityThisMonth";

describe("repeatActivityThisMonth", () => {
  it("Current week includes original date - Monday. Should return 07.03.2022", () => {
    const activity = repeatActivityThisMonth(
      createMockActivityByDateString("07.03.2022"),
      createMockWeekFromDateStringArray(WEEK_OF_MONTH)
    );
    const activityDate = activity ? stringifyDate(activity.date) : "";

    expect(activityDate).toBe("07.03.2022");
  });

  it("Current week includes original date - Sunday. Should return 13.03.2022", () => {
    const activity = repeatActivityThisMonth(
      createMockActivityByDateString("13.03.2022"),
      createMockWeekFromDateStringArray(WEEK_OF_MONTH)
    );
    const activityDate = activity ? stringifyDate(activity.date) : "";

    expect(activityDate).toBe("13.03.2022");
  });

  it("Original date - 07.02.2022, before current week. Should return 07.03.2022", () => {
    const activity = repeatActivityThisMonth(
      createMockActivityByDateString("07.03.2022"),
      createMockWeekFromDateStringArray(WEEK_OF_MONTH)
    );
    const activityDate = activity ? stringifyDate(activity.date) : "";

    expect(activityDate).toBe("07.03.2022");
  });

  it("Original date - 14.02.2022. Current week doesn't include 14.03.2022. Should return undefined", () => {
    const activity = repeatActivityThisMonth(
      createMockActivityByDateString("14.03.2022"),
      createMockWeekFromDateStringArray(WEEK_OF_MONTH)
    );

    expect(activity).toBe(undefined);
  });

  it("Original date - 07.03.2021, 12 months before current week. Should return 07.03.2022", () => {
    const activity = repeatActivityThisMonth(
      createMockActivityByDateString("07.03.2022"),
      createMockWeekFromDateStringArray(WEEK_OF_MONTH)
    );
    const activityDate = activity ? stringifyDate(activity.date) : "";

    expect(activityDate).toBe("07.03.2022");
  });

  it("Original date - 14.03.2022, day after current week. Should return undefined", () => {
    const activity = repeatActivityThisMonth(
      createMockActivityByDateString("14.03.2022"),
      createMockWeekFromDateStringArray(WEEK_OF_MONTH)
    );

    expect(activity).toBe(undefined);
  });
});
