import { createMockActivitySchema, setActivityTime } from "./testUtils";
import { validateActivity } from "./validateActivity";

describe("validateActivity", () => {
  it("Start time is greater then end time", () => {
    const activity = createMockActivitySchema();
    setActivityTime(
      {
        start: "11:00",
        end: "10:00",
      },
      activity
    );
    const validationData = validateActivity(activity);

    expect(validationData.isValid).toBeFalsy();
  });

  it("Start time is equals end time", () => {
    const activity = createMockActivitySchema();
    setActivityTime(
      {
        start: "10:00",
        end: "10:00",
      },
      activity
    );
    const validationData = validateActivity(activity);

    expect(validationData.isValid).toBeFalsy();
  });

  it("Start time is less then end time", () => {
    const activity = createMockActivitySchema();
    setActivityTime(
      {
        start: "10:00",
        end: "11:00",
      },
      activity
    );
    const validationData = validateActivity(activity);

    expect(validationData.isValid).toBeTruthy();
  });
});
