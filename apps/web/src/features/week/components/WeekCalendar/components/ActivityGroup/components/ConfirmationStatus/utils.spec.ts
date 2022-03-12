import { createMockStudent } from "apps/web/src/utils/testUtils";

import { getPendingStudents, getStudentsByIds } from "./utils";

describe("getStudentsByIds", () => {
  it("Can get all students", () => {
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const students = [student1, student2];
    const ids = [student1._id, student2._id];

    expect(getStudentsByIds(students, ids)).toStrictEqual(students);
  });

  it("Can't get first student and can get second", () => {
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const students = [student2];
    const ids = [student1._id, student2._id];

    expect(getStudentsByIds(students, ids)).toStrictEqual(students);
  });

  it("Can't get all students", () => {
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const students = [];
    const ids = [student1._id, student2._id];

    expect(getStudentsByIds(students, ids)).toStrictEqual(students);
  });
});

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
