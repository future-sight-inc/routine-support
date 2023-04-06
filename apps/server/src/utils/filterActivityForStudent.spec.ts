import {
  addStudentToActivity,
  createMockActivity,
  createMockStudent,
} from "@routine-support/domains";
import { filterActivityForStudent } from "./filterActivityForStudent";

const TARGET_STUDENT = createMockStudent();
const OTHER_STUDENT = createMockStudent();

describe("filterActivityForStudent", () => {
  it("Common activity. Should be truthy", () => {
    const activity = createMockActivity();
    const isActivityAvailable = filterActivityForStudent(activity, TARGET_STUDENT);

    expect(isActivityAvailable).toBeTruthy();
  });

  it("Student's activity. Should be truthy", () => {
    const activity = createMockActivity();

    addStudentToActivity(activity, TARGET_STUDENT);
    const isActivityAvailable = filterActivityForStudent(activity, TARGET_STUDENT);

    expect(isActivityAvailable).toBeTruthy();
  });

  it("Activity of another student. Should be falsy", () => {
    const activity = createMockActivity();

    addStudentToActivity(activity, OTHER_STUDENT);
    const isActivityAvailable = filterActivityForStudent(activity, TARGET_STUDENT);

    expect(isActivityAvailable).toBeFalsy();
  });
});
