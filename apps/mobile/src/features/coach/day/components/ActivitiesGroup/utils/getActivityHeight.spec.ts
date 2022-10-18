import { createMockActivityFromTimePeriod } from "@routine-support/domains";
import { TIMELINE_MARGIN } from "apps/mobile/src/constants/TimelineMargin";

import { getActivityHeight } from "./getActivityHeight";

const ROW_HEIGHT = 120;

describe("getActivityHeight", () => {
  it("Activity 11:00-12:00", () => {
    const activity = createMockActivityFromTimePeriod({ start: "11:00", end: "12:00" });

    expect(getActivityHeight({ activity, rowHeight: ROW_HEIGHT })).toBe(
      ROW_HEIGHT - TIMELINE_MARGIN * 2
    );
  });

  it("Activity 11:30-12:00", () => {
    const activity = createMockActivityFromTimePeriod({ start: "11:30", end: "12:00" });

    expect(getActivityHeight({ activity, rowHeight: ROW_HEIGHT })).toBe(
      ROW_HEIGHT / 2 - TIMELINE_MARGIN
    );
  });

  it("Activity 11:30-12:30", () => {
    const activity = createMockActivityFromTimePeriod({ start: "11:30", end: "12:30" });

    expect(getActivityHeight({ activity, rowHeight: ROW_HEIGHT })).toBe(ROW_HEIGHT);
  });

  it("Activity 11:30-14:30", () => {
    const activity = createMockActivityFromTimePeriod({ start: "11:30", end: "14:30" });

    expect(getActivityHeight({ activity, rowHeight: ROW_HEIGHT })).toBe(ROW_HEIGHT * 3);
  });
});
