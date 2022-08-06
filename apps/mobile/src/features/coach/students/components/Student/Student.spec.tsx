import React from "react";

import { createMockStudent } from "@routine-support/domains";
import { fireEvent, render } from "@testing-library/react-native";

import { StudentLocators } from "./locators";
import { Student } from "./Student";

jest.mock("../../../../../theme");

describe("Student", () => {
  const student = createMockStudent();

  it("Has proper name", () => {
    const { queryByText } = render(
      <Student
        student={student}
        onStudentOpen={() => null}
        onSettingsOpen={() => null}
        onQrOpen={() => null}
        onStudentDelete={() => null}
      />
    );

    expect(queryByText(student.name)).toBeTruthy();
  });

  it("Call settings handler", async () => {
    const handleSettingsOpen = jest.fn();

    const { getByTestId } = render(
      <Student
        student={student}
        onStudentOpen={() => null}
        onSettingsOpen={handleSettingsOpen}
        onQrOpen={() => null}
        onStudentDelete={() => null}
      />
    );

    await fireEvent.press(getByTestId(StudentLocators.SettingsButton));

    expect(handleSettingsOpen).toBeCalled();
  });

  it("Call QR handler", async () => {
    const handleQROpen = jest.fn();

    const { getByTestId } = render(
      <Student
        student={student}
        onStudentOpen={() => null}
        onSettingsOpen={() => null}
        onQrOpen={handleQROpen}
        onStudentDelete={() => null}
      />
    );

    await fireEvent.press(getByTestId(StudentLocators.QRButton));

    expect(handleQROpen).toBeCalled();
  });

  it("Call delete handler", async () => {
    const handleDelete = jest.fn();

    const { getByTestId } = render(
      <Student
        student={student}
        onStudentOpen={() => null}
        onSettingsOpen={() => null}
        onQrOpen={() => null}
        onStudentDelete={handleDelete}
      />
    );

    await fireEvent.press(getByTestId(StudentLocators.DeleteButton));

    expect(handleDelete).toBeCalled();
  });
});
