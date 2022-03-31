import {
  createGroupFromTimePeriod,
  createMockActivityFromTimePeriod,
} from "@routine-support/test-utils";
import { stringifyTime } from "@routine-support/utils";

import { addActivityToGroup } from "./addActivityToGroup";

describe("addActivityToGroup", () => {
  it("Activity inside group period. Period should stay the same", () => {
    const activity = createMockActivityFromTimePeriod({
      start: "13:00",
      end: "14:00",
    });
    const GROUP_START = "12:00";
    const GROUP_END = "15:00";
    const group = createGroupFromTimePeriod({
      start: GROUP_START,
      end: GROUP_END,
    });

    addActivityToGroup(group, activity);

    expect(stringifyTime(group.start)).toBe(GROUP_START);
    expect(stringifyTime(group.end)).toBe(GROUP_END);
    expect(group.activities).toContain(activity);
  });

  it("Start of activity before group start. Period should starts from activity start", () => {
    const activity = createMockActivityFromTimePeriod({
      start: "13:00",
      end: "14:00",
    });
    const group = createGroupFromTimePeriod({
      start: "13:30",
      end: "15:00",
    });

    addActivityToGroup(group, activity);

    expect(stringifyTime(group.start)).toBe(stringifyTime(activity.start));
    expect(group.activities).toContain(activity);
  });

  it("End of activity after group end. Period should lasts fo activity end", () => {
    const activity = createMockActivityFromTimePeriod({
      start: "13:00",
      end: "16:00",
    });
    const group = createGroupFromTimePeriod({
      start: "13:00",
      end: "15:00",
    });

    addActivityToGroup(group, activity);

    expect(stringifyTime(group.end)).toBe(stringifyTime(activity.end));
    expect(group.activities).toContain(activity);
  });

  it("End and start of activity includes group period. Period should be equals to activity period", () => {
    const activity = createMockActivityFromTimePeriod({
      start: "12:00",
      end: "16:00",
    });
    const group = createGroupFromTimePeriod({
      start: "13:00",
      end: "15:00",
    });

    addActivityToGroup(group, activity);

    expect(stringifyTime(group.start)).toBe(stringifyTime(activity.start));
    expect(stringifyTime(group.end)).toBe(stringifyTime(activity.end));
    expect(group.activities).toContain(activity);
  });
});
