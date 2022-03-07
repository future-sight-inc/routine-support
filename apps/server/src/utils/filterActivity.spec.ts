import { createMockActivitySchema, createMockFilter } from "./testUtils";
import { filterActivity } from "./filterActivity";

const TARGET_STUDENT_ID = "1";
const OTHER_STUDENT_ID = "2";

const AVAILABLE = true;
const UNAVAILABLE = false;

describe("filterActivities", () => {
  it("Common activity. Should be available for target student", () => {
    const activity = createMockActivitySchema();
    const filter = createMockFilter({ isCommon: true });

    expect(filterActivity(activity, filter)).toBe(AVAILABLE);
  });
});
