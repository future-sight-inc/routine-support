import { createMockStudent } from "@routine-support/domains";

import { filterStudents } from "./utils";

describe("filterStudents", () => {
  it("Pass empty arrays", () => {
    expect(
      filterStudents({ students: [], selectedStudents: [], filter: "" })
    ).toStrictEqual([]);
  });

  it("No one picked", () => {
    const student1 = createMockStudent();
    const student2 = createMockStudent();

    expect(
      filterStudents({
        students: [student1, student2],
        selectedStudents: [],
        filter: "",
      })
    ).toStrictEqual([student1, student2]);
  });

  it("One picked", () => {
    const student1 = createMockStudent();
    const student2 = createMockStudent();

    expect(
      filterStudents({
        students: [student1, student2],
        selectedStudents: [student2._id],
        filter: "",
      })
    ).toStrictEqual([student1]);
  });

  it("All picked", () => {
    const student1 = createMockStudent();
    const student2 = createMockStudent();

    expect(
      filterStudents({
        students: [student1, student2],
        selectedStudents: [student1._id, student2._id],
        filter: "",
      })
    ).toStrictEqual([]);
  });

  it("Empty filter", () => {
    const student1 = createMockStudent();
    const student2 = createMockStudent();

    expect(
      filterStudents({
        students: [student1, student2],
        selectedStudents: [],
        filter: "",
      })
    ).toStrictEqual([student1, student2]);
  });

  it("Filter Nikita by N", () => {
    const student1 = createMockStudent({ name: "Nikita" });

    expect(
      filterStudents({
        students: [student1],
        selectedStudents: [],
        filter: "N",
      })
    ).toStrictEqual([student1]);
  });

  it("Filter Nikita by n", () => {
    const student1 = createMockStudent({ name: "Nikita" });

    expect(
      filterStudents({
        students: [student1],
        selectedStudents: [],
        filter: "n",
      })
    ).toStrictEqual([student1]);
  });

  it("Filter Nikita by nikita", () => {
    const student1 = createMockStudent({ name: "Nikita" });

    expect(
      filterStudents({
        students: [student1],
        selectedStudents: [],
        filter: "nikita",
      })
    ).toStrictEqual([student1]);
  });
});
