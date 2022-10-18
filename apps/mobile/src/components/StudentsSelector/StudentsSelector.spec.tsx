import React from "react";

import { createMockStudent } from "@routine-support/domains";
import { fireEvent, render } from "@testing-library/react-native";

import { createOptionFromStudent } from "../../utils/createOptionFromStudent";
import { InputModalLocators } from "../InputModal/locators";
import { PopupLocators } from "../Popup/locators";
import { createOptionTestId } from "../Select/locators";
import { createStudentBadgeTestId, StudentsSelectorLocators } from "./locators";
import { StudentsSelector } from "./StudentsSelector";

describe("StudentsSelector", () => {
  it("Has no value, renders empty text", () => {
    const { getByTestId } = render(<StudentsSelector onSelect={() => null} students={[]} />);

    expect(getByTestId(StudentsSelectorLocators.EmptyText));
  });

  it("Has value, renders students", () => {
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const student3 = createMockStudent();
    const { getByTestId, queryByTestId } = render(
      <StudentsSelector
        onSelect={() => null}
        students={[student1, student2, student3]}
        value={[student1._id, student2._id]}
      />
    );

    expect(queryByTestId(StudentsSelectorLocators.EmptyText)).toBeFalsy();
    expect(getByTestId(createStudentBadgeTestId({ id: student1._id })));
    expect(getByTestId(createStudentBadgeTestId({ id: student2._id })));
  });

  it("Opens modal on press", async () => {
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const student3 = createMockStudent();
    const { getByTestId } = render(
      <StudentsSelector
        onSelect={() => null}
        students={[student1, student2, student3]}
        value={[student1._id, student2._id]}
      />
    );

    await fireEvent.press(getByTestId(StudentsSelectorLocators.Wrapper));
    expect(getByTestId(PopupLocators.Background));
  });

  it("Open modal, select option, press on confirm", async () => {
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const student3 = createMockStudent();
    const handleSelect = jest.fn();
    const { getByTestId } = render(
      <StudentsSelector
        onSelect={handleSelect}
        students={[student1, student2, student3]}
        value={[student1._id, student2._id]}
      />
    );

    await fireEvent.press(getByTestId(StudentsSelectorLocators.Wrapper));
    expect(getByTestId(PopupLocators.Background));

    await fireEvent.press(
      getByTestId(
        createOptionTestId({ option: createOptionFromStudent(student3), isSelected: false })
      )
    );
    await fireEvent.press(getByTestId(InputModalLocators.ConfirmText));
    expect(handleSelect).toBeCalledWith([student1._id, student2._id, student3._id]);
  });
});
