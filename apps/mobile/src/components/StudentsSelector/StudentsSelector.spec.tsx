import React from "react";

import { OverlayProvider } from "@react-native-aria/overlays";
import { createMockStudent } from "@routine-support/domains";
import { fireEvent, render } from "@testing-library/react-native";

import { InputModalLocators } from "../InputModal/locators";
import { Typography } from "../Typography";
import { createStudentTestId } from "./locators";
import { StudentsSelector } from "./StudentsSelector";

describe("StudentsSelector", () => {
  it("Open modal, shows students", async () => {
    const value = {};
    const handleSelect = jest.fn();
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const student3 = createMockStudent();

    const { getByTestId } = render(
      <OverlayProvider>
        <StudentsSelector
          onSelect={handleSelect}
          value={value}
          students={[student1, student2, student3]}
          pressElement={<Typography>Press</Typography>}
        />
      </OverlayProvider>
    );

    await fireEvent.press(getByTestId(InputModalLocators.PressElement));
    expect(getByTestId(InputModalLocators.Background)).toBeTruthy();

    expect(getByTestId(createStudentTestId({ student: student1, isSelected: false }))).toBeTruthy();
    expect(getByTestId(createStudentTestId({ student: student2, isSelected: false }))).toBeTruthy();
    expect(getByTestId(createStudentTestId({ student: student3, isSelected: false }))).toBeTruthy();
  });

  it("Open modal, press on student", async () => {
    const value = {};
    const handleSelect = jest.fn();
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const student3 = createMockStudent();

    const { getByTestId } = render(
      <OverlayProvider>
        <StudentsSelector
          onSelect={handleSelect}
          value={value}
          students={[student1, student2, student3]}
          pressElement={<Typography>Press</Typography>}
        />
      </OverlayProvider>
    );

    await fireEvent.press(getByTestId(InputModalLocators.PressElement));
    expect(getByTestId(InputModalLocators.Background)).toBeTruthy();

    await fireEvent.press(
      getByTestId(createStudentTestId({ student: student1, isSelected: false }))
    );
    expect(getByTestId(createStudentTestId({ student: student1, isSelected: true }))).toBeTruthy();
  });

  it("Open modal, shows selected students", async () => {
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const student3 = createMockStudent();
    const value = { [student1._id]: true, [student2._id]: true };
    const handleSelect = jest.fn();

    const { getByTestId } = render(
      <OverlayProvider>
        <StudentsSelector
          onSelect={handleSelect}
          value={value}
          students={[student1, student2, student3]}
          pressElement={<Typography>Press</Typography>}
        />
      </OverlayProvider>
    );

    expect(getByTestId(createStudentTestId({ student: student1, isSelected: true }))).toBeTruthy();
    expect(getByTestId(createStudentTestId({ student: student2, isSelected: true }))).toBeTruthy();
    expect(getByTestId(createStudentTestId({ student: student3, isSelected: false }))).toBeTruthy();
  });

  it("Open modal, toggle selected student", async () => {
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const student3 = createMockStudent();
    const value = { [student1._id]: true, [student2._id]: true };
    const handleSelect = jest.fn();

    const { getByTestId } = render(
      <OverlayProvider>
        <StudentsSelector
          onSelect={handleSelect}
          value={value}
          students={[student1, student2, student3]}
          pressElement={<Typography>Press</Typography>}
        />
      </OverlayProvider>
    );

    await fireEvent.press(getByTestId(InputModalLocators.PressElement));
    expect(getByTestId(InputModalLocators.Background)).toBeTruthy();

    await fireEvent.press(
      getByTestId(createStudentTestId({ student: student1, isSelected: true }))
    );
    expect(getByTestId(createStudentTestId({ student: student1, isSelected: false }))).toBeTruthy();
  });

  it("Open modal, toggle selected student, press on confirm", async () => {
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const student3 = createMockStudent();
    const value = { [student1._id]: true, [student2._id]: true };
    const handleSelect = jest.fn();

    const { getByTestId, queryByTestId } = render(
      <OverlayProvider>
        <StudentsSelector
          onSelect={handleSelect}
          value={value}
          students={[student1, student2, student3]}
          pressElement={<Typography>Press</Typography>}
        />
      </OverlayProvider>
    );

    await fireEvent.press(getByTestId(InputModalLocators.PressElement));
    expect(getByTestId(InputModalLocators.Background)).toBeTruthy();

    await fireEvent.press(
      getByTestId(createStudentTestId({ student: student1, isSelected: true }))
    );
    expect(getByTestId(createStudentTestId({ student: student1, isSelected: false }))).toBeTruthy();

    await fireEvent.press(getByTestId(InputModalLocators.ConfirmText));
    expect(handleSelect).toBeCalledWith({ [student2._id]: true });

    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(queryByTestId(InputModalLocators.Background)).toBeFalsy();
  });

  it("Open modal, toggle selected student, close modal", async () => {
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const student3 = createMockStudent();
    const value = { [student1._id]: true, [student2._id]: true };
    const handleSelect = jest.fn();

    const { getByTestId } = render(
      <OverlayProvider>
        <StudentsSelector
          onSelect={handleSelect}
          value={value}
          students={[student1, student2, student3]}
          pressElement={<Typography>Press</Typography>}
        />
      </OverlayProvider>
    );

    await fireEvent.press(getByTestId(InputModalLocators.PressElement));
    expect(getByTestId(InputModalLocators.Background)).toBeTruthy();

    await fireEvent.press(
      getByTestId(createStudentTestId({ student: student1, isSelected: true }))
    );
    expect(getByTestId(createStudentTestId({ student: student1, isSelected: false }))).toBeTruthy();

    await fireEvent.press(getByTestId(InputModalLocators.CloseText));
    await new Promise((resolve) => setTimeout(resolve, 1000));

    await fireEvent.press(getByTestId(InputModalLocators.PressElement));
    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(getByTestId(InputModalLocators.Background)).toBeTruthy();

    expect(getByTestId(createStudentTestId({ student: student1, isSelected: true }))).toBeTruthy();
    expect(getByTestId(createStudentTestId({ student: student2, isSelected: true }))).toBeTruthy();
    expect(getByTestId(createStudentTestId({ student: student3, isSelected: false }))).toBeTruthy();
  });
});
