import { createMockActivityFromTimePeriod } from "@routine-support/domains";

import { isTimeCrossed } from "./isTimeCrossed";

describe("isTimeCrossed", () => {
  it("Activity2 period includes start of Activity1", () => {
    const activity1 = createMockActivityFromTimePeriod({
      start: "12:00",
      end: "15:00",
    });
    const activity2 = createMockActivityFromTimePeriod({
      start: "13:00",
      end: "14:00",
    });

    expect(isTimeCrossed(activity1, activity2)).toBeTruthy();
  });

  it("Activity1 covers Activity2, same start", () => {
    const activity1 = createMockActivityFromTimePeriod({
      start: "00:00",
      end: "01:00",
    });
    const activity2 = createMockActivityFromTimePeriod({
      start: "00:00",
      end: "05:00",
    });

    expect(isTimeCrossed(activity1, activity2)).toBeTruthy();
  });

  it("Activity1 covers Activity2", () => {
    const activity1 = createMockActivityFromTimePeriod({
      start: "02:00",
      end: "03:00",
    });
    const activity2 = createMockActivityFromTimePeriod({
      start: "00:00",
      end: "05:00",
    });

    expect(isTimeCrossed(activity1, activity2)).toBeTruthy();
  });

  it("End of Activity2 period equals start of Activity1. Should be falsy (design requirement)", () => {
    const activity1 = createMockActivityFromTimePeriod({
      start: "12:00",
      end: "15:00",
    });
    const activity2 = createMockActivityFromTimePeriod({
      start: "15:00",
      end: "16:00",
    });

    expect(isTimeCrossed(activity1, activity2)).toBeFalsy();
  });

  it("Activity2 period includes end of Activity1", () => {
    const activity1 = createMockActivityFromTimePeriod({
      start: "15:00",
      end: "17:00",
    });
    const activity2 = createMockActivityFromTimePeriod({
      start: "14:00",
      end: "16:00",
    });

    expect(isTimeCrossed(activity1, activity2)).toBeTruthy();
  });

  it("Start of Activity2 period equals end of Activity1. Should be falsy (design requirement)", () => {
    const activity1 = createMockActivityFromTimePeriod({
      start: "12:00",
      end: "15:00",
    });
    const activity2 = createMockActivityFromTimePeriod({
      start: "11:00",
      end: "12:00",
    });

    expect(isTimeCrossed(activity1, activity2)).toBeFalsy();
  });

  it("Activity2 period includes whole Activity1 period", () => {
    const activity1 = createMockActivityFromTimePeriod({
      start: "12:00",
      end: "16:00",
    });
    const activity2 = createMockActivityFromTimePeriod({
      start: "12:00",
      end: "16:00",
    });

    expect(isTimeCrossed(activity1, activity2)).toBeTruthy();
  });

  it("Activity1 doesn't cross Activity2 period", () => {
    const activity1 = createMockActivityFromTimePeriod({
      start: "12:00",
      end: "13:00",
    });
    const activity2 = createMockActivityFromTimePeriod({
      start: "15:00",
      end: "16:00",
    });

    expect(isTimeCrossed(activity1, activity2)).toBeFalsy();
  });
});
