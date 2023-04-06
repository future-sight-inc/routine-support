import {
  createMockActivity,
  setActivityTime,
} from "@routine-support/domains";
import { SubmitErrorData } from "@routine-support/types";
import { validateActivityTime } from "./validateActivityTime";

const TIME_VALIDATION_ERROR: SubmitErrorData = {
  isValid: false,
  errors: [
    {
      name: "end",
      message: "Invalid activity time error",
    },
  ],
};

describe("validateActivityTime", () => {
  it("Start time is greater then end time", () => {
    const activity = createMockActivity();

    setActivityTime(
      {
        start: "11:00",
        end: "10:00",
      },
      activity
    );

    try {
      validateActivityTime(activity);
    } catch (error) {
      expect(error).toStrictEqual(TIME_VALIDATION_ERROR);
    }
  });

  it("Start time is equals end time", () => {
    const activity = createMockActivity();

    setActivityTime(
      {
        start: "10:00",
        end: "10:00",
      },
      activity
    );

    try {
      validateActivityTime(activity);
    } catch (error) {
      expect(error).toStrictEqual(TIME_VALIDATION_ERROR);
    }
  });

  it("Start time is less then end time", () => {
    const activity = createMockActivity();

    setActivityTime(
      {
        start: "10:00",
        end: "11:00",
      },
      activity
    );
    const validationData = validateActivityTime(activity);

    expect(validationData.isValid).toBeTruthy();
  });

  it("Start time is less then end time in minutes", () => {
    const activity = createMockActivity();

    setActivityTime(
      {
        start: "10:10",
        end: "10:11",
      },
      activity
    );
    const validationData = validateActivityTime(activity);

    expect(validationData.isValid).toBeTruthy();
  });

  it("Start time is greater then end time in minutes", () => {
    const activity = createMockActivity();

    setActivityTime(
      {
        start: "11:11",
        end: "11:10",
      },
      activity
    );

    try {
      validateActivityTime(activity);
    } catch (error) {
      expect(error).toStrictEqual(TIME_VALIDATION_ERROR);
    }
  });
});
