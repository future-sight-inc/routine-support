import React from "react";

import { createMockStudent } from "@routine-support/domains";
import { render } from "@testing-library/react-native";

import { StudentBadge } from "./StudentBadge";

describe("StudentBadge", () => {
  it("Renders student name", () => {
    const student = createMockStudent();
    const { getByText } = render(<StudentBadge student={student} />);

    expect(getByText(student.name));
  });
});
