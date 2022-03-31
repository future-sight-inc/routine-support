import { createMockStudent } from "@routine-support/test-utils";

import { getStudentsByIds } from "./getStudentsByIds";

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
