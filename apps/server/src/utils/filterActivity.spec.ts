import {
  addStudentToActivity,
  createMockActivitySchema,
  createMockFilter,
} from "./testUtils";
import { filterActivity } from "./filterActivity";

const TARGET_STUDENT_ID = "1";
const OTHER_STUDENT_ID = "2";

const AVAILABLE = true;
const UNAVAILABLE = false;

describe("filterActivities: get common", () => {
  it("Common activity. Should be available", () => {
    const activity = createMockActivitySchema();
    const filter = createMockFilter({ isCommon: true });

    expect(filterActivity(activity, filter)).toBe(AVAILABLE);
  });

  it("Student's activity. Shouldn't be available", () => {
    const activity = createMockActivitySchema();
    addStudentToActivity(activity, TARGET_STUDENT_ID);
    const filter = createMockFilter({ isCommon: true });

    expect(filterActivity(activity, filter)).toBe(UNAVAILABLE);
  });
});

describe("filterActivities: get only target student's activity", () => {
  it("Common activity. Shouldn't be available", () => {
    const activity = createMockActivitySchema();
    const filter = createMockFilter({});

    expect(filterActivity(activity, filter)).toBe(UNAVAILABLE);
  });

  it("Student's activity. Should be available", () => {
    const activity = createMockActivitySchema();
    addStudentToActivity(activity, TARGET_STUDENT_ID);
    const filter = createMockFilter({ students: [TARGET_STUDENT_ID] });

    expect(filterActivity(activity, filter)).toBe(AVAILABLE);
  });

  it("Other student's activity. Shouldn't be available", () => {
    const activity = createMockActivitySchema();
    addStudentToActivity(activity, OTHER_STUDENT_ID);
    const filter = createMockFilter({ students: [TARGET_STUDENT_ID] });

    expect(filterActivity(activity, filter)).toBe(UNAVAILABLE);
  });
});

describe("filterActivities: get target and other students activity", () => {
  it("Both students activity. Should be available", () => {
    const activity = createMockActivitySchema();
    addStudentToActivity(activity, TARGET_STUDENT_ID);
    addStudentToActivity(activity, OTHER_STUDENT_ID);
    const filter = createMockFilter({
      students: [TARGET_STUDENT_ID, OTHER_STUDENT_ID],
    });

    expect(filterActivity(activity, filter)).toBe(AVAILABLE);
  });

  it("Target student's activity. Should be available", () => {
    const activity = createMockActivitySchema();
    addStudentToActivity(activity, TARGET_STUDENT_ID);
    const filter = createMockFilter({
      students: [TARGET_STUDENT_ID, OTHER_STUDENT_ID],
    });

    expect(filterActivity(activity, filter)).toBe(AVAILABLE);
  });

  it("Common activity. Shouldn't be available", () => {
    const activity = createMockActivitySchema();
    const filter = createMockFilter({
      students: [TARGET_STUDENT_ID, OTHER_STUDENT_ID],
    });

    expect(filterActivity(activity, filter)).toBe(UNAVAILABLE);
  });
});

describe("filterActivities: get common, target and other student's activities", () => {
  it("Common activity. Should be available", () => {
    const activity = createMockActivitySchema();
    const filter = createMockFilter({
      isCommon: true,
      students: [TARGET_STUDENT_ID, OTHER_STUDENT_ID],
    });

    expect(filterActivity(activity, filter)).toBe(AVAILABLE);
  });

  it("Target student's activity. Should be available", () => {
    const activity = createMockActivitySchema();
    addStudentToActivity(activity, TARGET_STUDENT_ID);
    const filter = createMockFilter({
      isCommon: true,
      students: [TARGET_STUDENT_ID, OTHER_STUDENT_ID],
    });

    expect(filterActivity(activity, filter)).toBe(AVAILABLE);
  });

  it("Both students activity. Should be available", () => {
    const activity = createMockActivitySchema();
    addStudentToActivity(activity, TARGET_STUDENT_ID);
    addStudentToActivity(activity, OTHER_STUDENT_ID);
    const filter = createMockFilter({
      isCommon: true,
      students: [TARGET_STUDENT_ID, OTHER_STUDENT_ID],
    });

    expect(filterActivity(activity, filter)).toBe(AVAILABLE);
  });
});
