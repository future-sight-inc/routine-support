import { DEFAULT_ACTIVITY_COLOR } from "../constants/defaultActivityColor";
import { getActivityColor } from "./getActivityColor";
import {
  addStudentToActivity,
  createMockActivity,
  createMockStudent,
} from "./testUtils";

describe("getActivityColor", () => {
  it("Common activity", () => {
    const activity = createMockActivity();

    expect(getActivityColor(activity, [])).toBe(DEFAULT_ACTIVITY_COLOR);
  });

  it("Activity has assigned student", () => {
    const activity = createMockActivity();
    const student = createMockStudent();

    addStudentToActivity(activity, student);

    expect(getActivityColor(activity, [student])).toBe(student.color);
  });
});
