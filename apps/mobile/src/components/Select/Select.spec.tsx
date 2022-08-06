import React from "react";

import { OverlayProvider } from "@react-native-aria/overlays";
import { createMockStudent } from "@routine-support/domains";
import { fireEvent, render } from "@testing-library/react-native";

import { createOptionFromStudent } from "../../utils/createOptionFromStudent";
import { InputModalLocators } from "../InputModal/locators";
import { createOptionTestId, SelectLocators } from "./locators";
import { Select } from "./Select";

describe("Select", () => {
  it("Open modal, shows options", async () => {
    const handleSelect = jest.fn();
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const student3 = createMockStudent();
    const options = [student1, student2, student3].map(createOptionFromStudent);

    const { getByTestId } = render(
      <OverlayProvider>
        <Select onSelect={handleSelect} options={options} />
      </OverlayProvider>
    );

    await fireEvent.press(getByTestId(InputModalLocators.PressElement));
    expect(getByTestId(InputModalLocators.Background)).toBeTruthy();

    expect(getByTestId(createOptionTestId({ option: options[0], isSelected: false }))).toBeTruthy();
    expect(getByTestId(createOptionTestId({ option: options[1], isSelected: false }))).toBeTruthy();
    expect(getByTestId(createOptionTestId({ option: options[2], isSelected: false }))).toBeTruthy();
  });

  it("Open modal, press on option", async () => {
    const handleSelect = jest.fn();
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const student3 = createMockStudent();
    const options = [student1, student2, student3].map(createOptionFromStudent);

    const { getByTestId } = render(
      <OverlayProvider>
        <Select onSelect={handleSelect} options={options} />
      </OverlayProvider>
    );

    await fireEvent.press(getByTestId(InputModalLocators.PressElement));
    expect(getByTestId(InputModalLocators.Background)).toBeTruthy();

    await fireEvent.press(
      getByTestId(createOptionTestId({ option: options[0], isSelected: false }))
    );
    expect(getByTestId(createOptionTestId({ option: options[0], isSelected: true }))).toBeTruthy();
  });

  it("Open modal, shows selected value", async () => {
    const handleSelect = jest.fn();
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const student3 = createMockStudent();
    const options = [student1, student2, student3].map(createOptionFromStudent);
    const value = student1._id;

    const { getByTestId } = render(
      <OverlayProvider>
        <Select onSelect={handleSelect} options={options} value={value} />
      </OverlayProvider>
    );

    expect(getByTestId(SelectLocators.Input).props.value).toBe(student1.name);
    expect(getByTestId(createOptionTestId({ option: options[0], isSelected: true }))).toBeTruthy();
    expect(getByTestId(createOptionTestId({ option: options[1], isSelected: false }))).toBeTruthy();
    expect(getByTestId(createOptionTestId({ option: options[2], isSelected: false }))).toBeTruthy();
  });

  it("Open modal, toggle selected option", async () => {
    const handleSelect = jest.fn();
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const student3 = createMockStudent();
    const options = [student1, student2, student3].map(createOptionFromStudent);
    const value = student1._id;

    const { getByTestId } = render(
      <OverlayProvider>
        <Select onSelect={handleSelect} options={options} value={value} />
      </OverlayProvider>
    );

    await fireEvent.press(getByTestId(InputModalLocators.PressElement));
    expect(getByTestId(InputModalLocators.Background)).toBeTruthy();

    await fireEvent.press(
      getByTestId(createOptionTestId({ option: options[0], isSelected: true }))
    );
    expect(getByTestId(createOptionTestId({ option: options[0], isSelected: false }))).toBeTruthy();
  });

  it("Open modal, select another option", async () => {
    const handleSelect = jest.fn();
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const student3 = createMockStudent();
    const options = [student1, student2, student3].map(createOptionFromStudent);
    const value = student1._id;

    const { getByTestId } = render(
      <OverlayProvider>
        <Select onSelect={handleSelect} options={options} value={value} />
      </OverlayProvider>
    );

    await fireEvent.press(getByTestId(InputModalLocators.PressElement));
    expect(getByTestId(InputModalLocators.Background)).toBeTruthy();

    await fireEvent.press(
      getByTestId(createOptionTestId({ option: options[1], isSelected: false }))
    );
    expect(getByTestId(createOptionTestId({ option: options[0], isSelected: false }))).toBeTruthy();
    expect(getByTestId(createOptionTestId({ option: options[1], isSelected: true }))).toBeTruthy();
  });

  it("Open modal, toggle selected option, press on confirm", async () => {
    const handleSelect = jest.fn();
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const student3 = createMockStudent();
    const options = [student1, student2, student3].map(createOptionFromStudent);
    const value = student1._id;

    const { getByTestId, queryByTestId } = render(
      <OverlayProvider>
        <Select onSelect={handleSelect} options={options} value={value} />
      </OverlayProvider>
    );

    expect(getByTestId(SelectLocators.Input).props.value).toBe(student1.name);
    await fireEvent.press(getByTestId(InputModalLocators.PressElement));
    expect(getByTestId(InputModalLocators.Background)).toBeTruthy();

    await fireEvent.press(
      getByTestId(createOptionTestId({ option: options[0], isSelected: true }))
    );
    expect(getByTestId(createOptionTestId({ option: options[0], isSelected: false }))).toBeTruthy();

    await fireEvent.press(getByTestId(InputModalLocators.ConfirmText));
    expect(handleSelect).toBeCalledWith(undefined);
    expect(getByTestId(SelectLocators.Input).props.value).toBe("");

    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(queryByTestId(InputModalLocators.Background)).toBeFalsy();
  });

  it("Open modal, toggle selected option, close modal", async () => {
    const handleSelect = jest.fn();
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const student3 = createMockStudent();
    const options = [student1, student2, student3].map(createOptionFromStudent);
    const value = student1._id;

    const { getByTestId } = render(
      <OverlayProvider>
        <Select onSelect={handleSelect} options={options} value={value} />
      </OverlayProvider>
    );

    await fireEvent.press(getByTestId(InputModalLocators.PressElement));
    expect(getByTestId(InputModalLocators.Background)).toBeTruthy();

    await fireEvent.press(
      getByTestId(createOptionTestId({ option: options[0], isSelected: true }))
    );
    expect(getByTestId(createOptionTestId({ option: options[0], isSelected: false }))).toBeTruthy();

    await fireEvent.press(getByTestId(InputModalLocators.CloseText));
    await new Promise((resolve) => setTimeout(resolve, 1000));

    await fireEvent.press(getByTestId(InputModalLocators.PressElement));
    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(getByTestId(InputModalLocators.Background)).toBeTruthy();

    expect(getByTestId(createOptionTestId({ option: options[0], isSelected: true }))).toBeTruthy();
    expect(getByTestId(createOptionTestId({ option: options[1], isSelected: false }))).toBeTruthy();
    expect(getByTestId(createOptionTestId({ option: options[2], isSelected: false }))).toBeTruthy();
  });

  it("Multiple: open modal, shows options", async () => {
    const handleSelect = jest.fn();
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const student3 = createMockStudent();
    const options = [student1, student2, student3].map(createOptionFromStudent);

    const { getByTestId } = render(
      <OverlayProvider>
        <Select onSelect={handleSelect} options={options} multiple />
      </OverlayProvider>
    );

    await fireEvent.press(getByTestId(InputModalLocators.PressElement));
    expect(getByTestId(InputModalLocators.Background)).toBeTruthy();

    expect(getByTestId(createOptionTestId({ option: options[0], isSelected: false }))).toBeTruthy();
    expect(getByTestId(createOptionTestId({ option: options[1], isSelected: false }))).toBeTruthy();
    expect(getByTestId(createOptionTestId({ option: options[2], isSelected: false }))).toBeTruthy();
  });

  it("Multiple: open modal, press on student", async () => {
    const handleSelect = jest.fn();
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const student3 = createMockStudent();
    const options = [student1, student2, student3].map(createOptionFromStudent);

    const { getByTestId } = render(
      <OverlayProvider>
        <Select onSelect={handleSelect} options={options} multiple />
      </OverlayProvider>
    );

    await fireEvent.press(getByTestId(InputModalLocators.PressElement));
    expect(getByTestId(InputModalLocators.Background)).toBeTruthy();

    await fireEvent.press(
      getByTestId(createOptionTestId({ option: options[0], isSelected: false }))
    );
    expect(getByTestId(createOptionTestId({ option: options[0], isSelected: true }))).toBeTruthy();
  });

  it("Multiple: open modal, shows selected value", async () => {
    const handleSelect = jest.fn();
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const student3 = createMockStudent();
    const options = [student1, student2, student3].map(createOptionFromStudent);
    const value = [student1._id];

    const { getByTestId } = render(
      <OverlayProvider>
        <Select onSelect={handleSelect} options={options} value={value} multiple />
      </OverlayProvider>
    );

    expect(getByTestId(SelectLocators.Input).props.value).toBe(student1.name);
    expect(getByTestId(createOptionTestId({ option: options[0], isSelected: true }))).toBeTruthy();
    expect(getByTestId(createOptionTestId({ option: options[1], isSelected: false }))).toBeTruthy();
    expect(getByTestId(createOptionTestId({ option: options[2], isSelected: false }))).toBeTruthy();
  });

  it("Multiple: open modal, toggle selected option", async () => {
    const handleSelect = jest.fn();
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const student3 = createMockStudent();
    const options = [student1, student2, student3].map(createOptionFromStudent);
    const value = [student1._id];

    const { getByTestId } = render(
      <OverlayProvider>
        <Select onSelect={handleSelect} options={options} value={value} multiple />
      </OverlayProvider>
    );

    await fireEvent.press(getByTestId(InputModalLocators.PressElement));
    expect(getByTestId(InputModalLocators.Background)).toBeTruthy();

    await fireEvent.press(
      getByTestId(createOptionTestId({ option: options[0], isSelected: true }))
    );
    expect(getByTestId(createOptionTestId({ option: options[0], isSelected: false }))).toBeTruthy();
  });

  it("Multiple: open modal, select another value option", async () => {
    const handleSelect = jest.fn();
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const student3 = createMockStudent();
    const options = [student1, student2, student3].map(createOptionFromStudent);
    const value = [student1._id];

    const { getByTestId } = render(
      <OverlayProvider>
        <Select onSelect={handleSelect} options={options} value={value} multiple />
      </OverlayProvider>
    );

    await fireEvent.press(getByTestId(InputModalLocators.PressElement));
    expect(getByTestId(InputModalLocators.Background)).toBeTruthy();

    await fireEvent.press(
      getByTestId(createOptionTestId({ option: options[1], isSelected: false }))
    );
    expect(getByTestId(createOptionTestId({ option: options[0], isSelected: true }))).toBeTruthy();
    expect(getByTestId(createOptionTestId({ option: options[1], isSelected: true }))).toBeTruthy();
  });

  it("Multiple: open modal, toggle selected option, press on confirm", async () => {
    const handleSelect = jest.fn();
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const student3 = createMockStudent();
    const options = [student1, student2, student3].map(createOptionFromStudent);
    const value = [student1._id];

    const { getByTestId, queryByTestId } = render(
      <OverlayProvider>
        <Select onSelect={handleSelect} options={options} value={value} multiple />
      </OverlayProvider>
    );

    await fireEvent.press(getByTestId(InputModalLocators.PressElement));
    expect(getByTestId(InputModalLocators.Background)).toBeTruthy();

    await fireEvent.press(
      getByTestId(createOptionTestId({ option: options[0], isSelected: true }))
    );
    expect(getByTestId(createOptionTestId({ option: options[0], isSelected: false }))).toBeTruthy();

    await fireEvent.press(getByTestId(InputModalLocators.ConfirmText));
    expect(handleSelect).toBeCalledWith([]);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(queryByTestId(InputModalLocators.Background)).toBeFalsy();
  });

  it("Multiple: open modal, select another option, press on confirm", async () => {
    const handleSelect = jest.fn();
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const student3 = createMockStudent();
    const options = [student1, student2, student3].map(createOptionFromStudent);
    const value = [student1._id];

    const { getByTestId, queryByTestId } = render(
      <OverlayProvider>
        <Select onSelect={handleSelect} options={options} value={value} multiple />
      </OverlayProvider>
    );

    await fireEvent.press(getByTestId(InputModalLocators.PressElement));
    expect(getByTestId(InputModalLocators.Background)).toBeTruthy();

    await fireEvent.press(
      getByTestId(createOptionTestId({ option: options[1], isSelected: false }))
    );
    expect(getByTestId(createOptionTestId({ option: options[1], isSelected: true }))).toBeTruthy();

    await fireEvent.press(getByTestId(InputModalLocators.ConfirmText));
    expect(handleSelect).toBeCalledWith([student1._id, student2._id]);
    expect(getByTestId(SelectLocators.Input).props.value).toBe(
      [student1.name, student2.name].join(", ")
    );

    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(queryByTestId(InputModalLocators.Background)).toBeFalsy();
  });

  it("Multiple: open modal, toggle selected option, close modal", async () => {
    const handleSelect = jest.fn();
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const student3 = createMockStudent();
    const options = [student1, student2, student3].map(createOptionFromStudent);
    const value = [student1._id];

    const { getByTestId } = render(
      <OverlayProvider>
        <Select onSelect={handleSelect} options={options} value={value} multiple />
      </OverlayProvider>
    );

    await fireEvent.press(getByTestId(InputModalLocators.PressElement));
    expect(getByTestId(InputModalLocators.Background)).toBeTruthy();

    await fireEvent.press(
      getByTestId(createOptionTestId({ option: options[0], isSelected: true }))
    );
    expect(getByTestId(createOptionTestId({ option: options[0], isSelected: false }))).toBeTruthy();

    await fireEvent.press(getByTestId(InputModalLocators.CloseText));
    await new Promise((resolve) => setTimeout(resolve, 1000));

    await fireEvent.press(getByTestId(InputModalLocators.PressElement));
    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(getByTestId(InputModalLocators.Background)).toBeTruthy();

    expect(getByTestId(createOptionTestId({ option: options[0], isSelected: true }))).toBeTruthy();
    expect(getByTestId(createOptionTestId({ option: options[1], isSelected: false }))).toBeTruthy();
    expect(getByTestId(createOptionTestId({ option: options[2], isSelected: false }))).toBeTruthy();
  });
});
