import {
  createGroupFromTimePeriod,
  createMockActivityFromTimePeriod,
} from "@routine-support/test-utils";

import { shouldAddActivityToGroup } from "./shouldAddActivityToGroup";

describe("shouldAddActivityToGroup", () => {
  it("Group period includes start of activity", () => {
    const group = createGroupFromTimePeriod({
      start: "12:00",
      end: "15:00",
    });
    const activity = createMockActivityFromTimePeriod({
      start: "13:00",
      end: "14:00",
    });

    expect(shouldAddActivityToGroup(group, activity)).toBeTruthy();
  });

  it("End of group period equals start of activity. Should be falsy (design requirement)", () => {
    const group = createGroupFromTimePeriod({
      start: "12:00",
      end: "15:00",
    });
    const activity = createMockActivityFromTimePeriod({
      start: "15:00",
      end: "16:00",
    });

    expect(shouldAddActivityToGroup(group, activity)).toBeFalsy();
  });

  it("Group period includes end of activity", () => {
    const group = createGroupFromTimePeriod({
      start: "15:00",
      end: "17:00",
    });
    const activity = createMockActivityFromTimePeriod({
      start: "14:00",
      end: "16:00",
    });

    expect(shouldAddActivityToGroup(group, activity)).toBeTruthy();
  });

  it("Start of group period equals end of activity. Should be falsy (design requirement)", () => {
    const group = createGroupFromTimePeriod({
      start: "12:00",
      end: "15:00",
    });
    const activity = createMockActivityFromTimePeriod({
      start: "11:00",
      end: "12:00",
    });

    expect(shouldAddActivityToGroup(group, activity)).toBeFalsy();
  });

  it("Group period includes whole activity period", () => {
    const group = createGroupFromTimePeriod({
      start: "12:00",
      end: "16:00",
    });
    const activity = createMockActivityFromTimePeriod({
      start: "12:00",
      end: "16:00",
    });

    expect(shouldAddActivityToGroup(group, activity)).toBeTruthy();
  });

  it("Activity doesn't cross group period", () => {
    const group = createGroupFromTimePeriod({
      start: "12:00",
      end: "13:00",
    });
    const activity = createMockActivityFromTimePeriod({
      start: "15:00",
      end: "16:00",
    });

    expect(shouldAddActivityToGroup(group, activity)).toBeFalsy();
  });
});
