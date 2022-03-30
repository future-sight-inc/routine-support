import { createMockStudent } from "apps/web/src/utils/testUtils";

import { getPendingStudents } from "./utils";

describe("getPendingStudents", () => {
  it("No pending students", () => {
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const assignedStudents = [student1, student2];
    const confirmedStudents = assignedStudents;

    expect(
      getPendingStudents(assignedStudents, confirmedStudents)
    ).toStrictEqual([]);
  });

  it("One pending student", () => {
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const assignedStudents = [student1, student2];
    const confirmedStudents = [student1];

    expect(
      getPendingStudents(assignedStudents, confirmedStudents)
    ).toStrictEqual([student2]);
  });

  it("All students are pending", () => {
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const assignedStudents = [student1, student2];
    const confirmedStudents = [];

    expect(
      getPendingStudents(assignedStudents, confirmedStudents)
    ).toStrictEqual(assignedStudents);
  });
});
