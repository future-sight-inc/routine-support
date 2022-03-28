import { addStudentToActivity, createMockActivitySchema } from "./testUtils";
import { filterActivityForStudent } from "./filterActivityForStudent";

const TARGET_STUDENT_ID = "1";
const OTHER_STUDENT_ID = "2";

describe("filterActivityForStudent", () => {
  it("Common activity. Should be truthy", () => {
    const activity = createMockActivitySchema();
    const isActivityAvailable = filterActivityForStudent(
      activity,
      TARGET_STUDENT_ID
    );

    expect(isActivityAvailable).toBeTruthy();
  });

  it("Student's activity. Should be truthy", () => {
    const activity = createMockActivitySchema();

    addStudentToActivity(activity, TARGET_STUDENT_ID);
    const isActivityAvailable = filterActivityForStudent(
      activity,
      TARGET_STUDENT_ID
    );

    expect(isActivityAvailable).toBeTruthy();
  });

  it("Activity of another student. Should be falsy", () => {
    const activity = createMockActivitySchema();

    addStudentToActivity(activity, OTHER_STUDENT_ID);
    const isActivityAvailable = filterActivityForStudent(
      activity,
      TARGET_STUDENT_ID
    );

    expect(isActivityAvailable).toBeFalsy();
  });
});
