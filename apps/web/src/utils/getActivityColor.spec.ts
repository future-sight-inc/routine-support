import {
  addStudentToActivity,
  createMockActivity,
  createMockStudent,
} from "@routine-support/domains";

import {
  COMMON_ACTIVITY_COLOR,
  GROUP_ACTIVITY_COLOR,
  IMPORTANT_ACTIVITY_COLOR,
} from "../constants/defaultActivityColor";
import { getActivityColor } from "./getActivityColor";
import { getColor } from "./getColor";

describe("getActivityColor", () => {
  it("Common activity", () => {
    const activity = createMockActivity();

    expect(getActivityColor(activity, [])).toBe(COMMON_ACTIVITY_COLOR);
  });

  it("Activity has one assigned student", () => {
    const activity = createMockActivity();
    const student = createMockStudent();

    addStudentToActivity(activity, student);

    expect(getActivityColor(activity, [student])).toBe(getColor(student.color));
  });

  it("Activity has two assigned students", () => {
    const activity = createMockActivity();
    const student1 = createMockStudent();
    const student2 = createMockStudent();

    addStudentToActivity(activity, student1);
    addStudentToActivity(activity, student2);

    expect(getActivityColor(activity, [student1, student2])).toBe(
      GROUP_ACTIVITY_COLOR
    );
  });

  it("Important activity", () => {
    const activity = createMockActivity({ isImportant: true });

    expect(getActivityColor(activity, [])).toBe(IMPORTANT_ACTIVITY_COLOR);
  });
});
