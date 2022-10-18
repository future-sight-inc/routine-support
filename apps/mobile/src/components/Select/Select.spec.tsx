import React from "react";

import { createMockStudent } from "@routine-support/domains";
import { fireEvent, render } from "@testing-library/react-native";

import { createOptionFromStudent } from "../../utils/createOptionFromStudent";
import { InputModalLocators } from "../InputModal/locators";
import { PopupLocators } from "../Popup/locators";
import { createOptionTestId, SelectLocators } from "./locators";
import { Select } from "./Select";

describe("Select", () => {
  it("Open modal, shows options", async () => {
    const handleSelect = jest.fn();
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const student3 = createMockStudent();
    const options = [student1, student2, student3].map(createOptionFromStudent);

    const { getByTestId } = render(<Select onSelect={handleSelect} options={options} />);

    await fireEvent.press(getByTestId(PopupLocators.PressElement));
    expect(getByTestId(PopupLocators.Background)).toBeTruthy();

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

    const { getByTestId } = render(<Select onSelect={handleSelect} options={options} />);

    await fireEvent.press(getByTestId(PopupLocators.PressElement));
    expect(getByTestId(PopupLocators.Background)).toBeTruthy();

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
      <Select onSelect={handleSelect} options={options} value={value} />
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
      <Select onSelect={handleSelect} options={options} value={value} />
    );

    await fireEvent.press(getByTestId(PopupLocators.PressElement));
    expect(getByTestId(PopupLocators.Background)).toBeTruthy();

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
      <Select onSelect={handleSelect} options={options} value={value} />
    );

    await fireEvent.press(getByTestId(PopupLocators.PressElement));
    expect(getByTestId(PopupLocators.Background)).toBeTruthy();

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
      <Select onSelect={handleSelect} options={options} value={value} />
    );

    expect(getByTestId(SelectLocators.Input).props.value).toBe(student1.name);
    await fireEvent.press(getByTestId(PopupLocators.PressElement));
    expect(getByTestId(PopupLocators.Background)).toBeTruthy();

    await fireEvent.press(
      getByTestId(createOptionTestId({ option: options[0], isSelected: true }))
    );
    expect(getByTestId(createOptionTestId({ option: options[0], isSelected: false }))).toBeTruthy();

    await fireEvent.press(getByTestId(InputModalLocators.ConfirmText));
    expect(handleSelect).toBeCalledWith(undefined);
    expect(getByTestId(SelectLocators.Input).props.value).toBe("");

    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(queryByTestId(PopupLocators.Background)).toBeFalsy();
  });

  it("Open modal, toggle selected option, close modal", async () => {
    const handleSelect = jest.fn();
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const student3 = createMockStudent();
    const options = [student1, student2, student3].map(createOptionFromStudent);
    const value = student1._id;

    const { getByTestId } = render(
      <Select onSelect={handleSelect} options={options} value={value} />
    );

    await fireEvent.press(getByTestId(PopupLocators.PressElement));
    expect(getByTestId(PopupLocators.Background)).toBeTruthy();

    await fireEvent.press(
      getByTestId(createOptionTestId({ option: options[0], isSelected: true }))
    );
    expect(getByTestId(createOptionTestId({ option: options[0], isSelected: false }))).toBeTruthy();

    await fireEvent.press(getByTestId(InputModalLocators.CloseText));
    await new Promise((resolve) => setTimeout(resolve, 1000));

    await fireEvent.press(getByTestId(PopupLocators.PressElement));
    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(getByTestId(PopupLocators.Background)).toBeTruthy();

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

    const { getByTestId } = render(<Select onSelect={handleSelect} options={options} multiple />);

    await fireEvent.press(getByTestId(PopupLocators.PressElement));
    expect(getByTestId(PopupLocators.Background)).toBeTruthy();

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

    const { getByTestId } = render(<Select onSelect={handleSelect} options={options} multiple />);

    await fireEvent.press(getByTestId(PopupLocators.PressElement));
    expect(getByTestId(PopupLocators.Background)).toBeTruthy();

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
      <Select onSelect={handleSelect} options={options} value={value} multiple />
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
      <Select onSelect={handleSelect} options={options} value={value} multiple />
    );

    await fireEvent.press(getByTestId(PopupLocators.PressElement));
    expect(getByTestId(PopupLocators.Background)).toBeTruthy();

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
      <Select onSelect={handleSelect} options={options} value={value} multiple />
    );

    await fireEvent.press(getByTestId(PopupLocators.PressElement));
    expect(getByTestId(PopupLocators.Background)).toBeTruthy();

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
      <Select onSelect={handleSelect} options={options} value={value} multiple />
    );

    await fireEvent.press(getByTestId(PopupLocators.PressElement));
    expect(getByTestId(PopupLocators.Background)).toBeTruthy();

    await fireEvent.press(
      getByTestId(createOptionTestId({ option: options[0], isSelected: true }))
    );
    expect(getByTestId(createOptionTestId({ option: options[0], isSelected: false }))).toBeTruthy();

    await fireEvent.press(getByTestId(InputModalLocators.ConfirmText));
    expect(handleSelect).toBeCalledWith([]);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(queryByTestId(PopupLocators.Background)).toBeFalsy();
  });

  it("Multiple: open modal, select another option, press on confirm", async () => {
    const handleSelect = jest.fn();
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const student3 = createMockStudent();
    const options = [student1, student2, student3].map(createOptionFromStudent);
    const value = [student1._id];

    const { getByTestId, queryByTestId } = render(
      <Select onSelect={handleSelect} options={options} value={value} multiple />
    );

    await fireEvent.press(getByTestId(PopupLocators.PressElement));
    expect(getByTestId(PopupLocators.Background)).toBeTruthy();

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
    expect(queryByTestId(PopupLocators.Background)).toBeFalsy();
  });

  it("Multiple: open modal, toggle selected option, close modal", async () => {
    const handleSelect = jest.fn();
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const student3 = createMockStudent();
    const options = [student1, student2, student3].map(createOptionFromStudent);
    const value = [student1._id];

    const { getByTestId } = render(
      <Select onSelect={handleSelect} options={options} value={value} multiple />
    );

    await fireEvent.press(getByTestId(PopupLocators.PressElement));
    expect(getByTestId(PopupLocators.Background)).toBeTruthy();

    await fireEvent.press(
      getByTestId(createOptionTestId({ option: options[0], isSelected: true }))
    );
    expect(getByTestId(createOptionTestId({ option: options[0], isSelected: false }))).toBeTruthy();

    await fireEvent.press(getByTestId(InputModalLocators.CloseText));
    await new Promise((resolve) => setTimeout(resolve, 1000));

    await fireEvent.press(getByTestId(PopupLocators.PressElement));
    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(getByTestId(PopupLocators.Background)).toBeTruthy();

    expect(getByTestId(createOptionTestId({ option: options[0], isSelected: true }))).toBeTruthy();
    expect(getByTestId(createOptionTestId({ option: options[1], isSelected: false }))).toBeTruthy();
    expect(getByTestId(createOptionTestId({ option: options[2], isSelected: false }))).toBeTruthy();
  });

  it("Not searchable, has no search field", () => {
    const { queryByTestId } = render(<Select onSelect={() => null} options={[]} />);

    expect(queryByTestId(SelectLocators.SearchField)).toBeFalsy();
  });

  it("Searchable, has no search field", () => {
    const { queryByTestId } = render(
      <Select onSelect={() => null} options={[]} searchable multiple />
    );

    expect(queryByTestId(SelectLocators.SearchField));
  });

  it("Searchable, has no options after filtration", async () => {
    const student1 = createMockStudent();
    const student2 = createMockStudent();
    const student3 = createMockStudent();
    const options = [student1, student2, student3].map(createOptionFromStudent);
    const { getByTestId, queryByTestId } = render(
      <Select onSelect={() => null} options={options} searchable multiple />
    );

    await fireEvent.press(getByTestId(PopupLocators.PressElement));
    expect(getByTestId(PopupLocators.Background)).toBeTruthy();

    expect(getByTestId(createOptionTestId({ option: options[0], isSelected: false }))).toBeTruthy();
    expect(getByTestId(createOptionTestId({ option: options[1], isSelected: false }))).toBeTruthy();
    expect(getByTestId(createOptionTestId({ option: options[2], isSelected: false }))).toBeTruthy();

    fireEvent.changeText(getByTestId(SelectLocators.SearchField), "123");

    expect(
      queryByTestId(createOptionTestId({ option: options[0], isSelected: false }))
    ).toBeFalsy();
    expect(
      queryByTestId(createOptionTestId({ option: options[1], isSelected: false }))
    ).toBeFalsy();
    expect(
      queryByTestId(createOptionTestId({ option: options[2], isSelected: false }))
    ).toBeFalsy();
  });

  it("Searchable, has two options after filtration", async () => {
    const student1 = createMockStudent({ name: "Masha1" });
    const student2 = createMockStudent({ name: "Masha2" });
    const student3 = createMockStudent();
    const options = [student1, student2, student3].map(createOptionFromStudent);
    const { getByTestId, queryByTestId } = render(
      <Select onSelect={() => null} options={options} searchable multiple />
    );

    await fireEvent.press(getByTestId(PopupLocators.PressElement));
    expect(getByTestId(PopupLocators.Background)).toBeTruthy();

    expect(getByTestId(createOptionTestId({ option: options[0], isSelected: false }))).toBeTruthy();
    expect(getByTestId(createOptionTestId({ option: options[1], isSelected: false }))).toBeTruthy();
    expect(getByTestId(createOptionTestId({ option: options[2], isSelected: false }))).toBeTruthy();

    fireEvent.changeText(getByTestId(SelectLocators.SearchField), "Masha");

    expect(getByTestId(createOptionTestId({ option: options[0], isSelected: false }))).toBeTruthy();
    expect(getByTestId(createOptionTestId({ option: options[1], isSelected: false }))).toBeTruthy();
    expect(
      queryByTestId(createOptionTestId({ option: options[2], isSelected: false }))
    ).toBeFalsy();
  });

  it("Searchable, has two options after filtration, case insensitive", async () => {
    const student1 = createMockStudent({ name: "Masha1" });
    const student2 = createMockStudent({ name: "Masha2" });
    const student3 = createMockStudent();
    const options = [student1, student2, student3].map(createOptionFromStudent);
    const { getByTestId, queryByTestId } = render(
      <Select onSelect={() => null} options={options} searchable multiple />
    );

    await fireEvent.press(getByTestId(PopupLocators.PressElement));
    expect(getByTestId(PopupLocators.Background)).toBeTruthy();

    expect(getByTestId(createOptionTestId({ option: options[0], isSelected: false }))).toBeTruthy();
    expect(getByTestId(createOptionTestId({ option: options[1], isSelected: false }))).toBeTruthy();
    expect(getByTestId(createOptionTestId({ option: options[2], isSelected: false }))).toBeTruthy();

    fireEvent.changeText(getByTestId(SelectLocators.SearchField), "masha");

    expect(getByTestId(createOptionTestId({ option: options[0], isSelected: false }))).toBeTruthy();
    expect(getByTestId(createOptionTestId({ option: options[1], isSelected: false }))).toBeTruthy();
    expect(
      queryByTestId(createOptionTestId({ option: options[2], isSelected: false }))
    ).toBeFalsy();
  });

  it("Searchable, has two options after filtration, search string is a middle substring", async () => {
    const student1 = createMockStudent({ name: "Masha1" });
    const student2 = createMockStudent({ name: "Masha2" });
    const student3 = createMockStudent();
    const options = [student1, student2, student3].map(createOptionFromStudent);
    const { getByTestId, queryByTestId } = render(
      <Select onSelect={() => null} options={options} searchable multiple />
    );

    await fireEvent.press(getByTestId(PopupLocators.PressElement));
    expect(getByTestId(PopupLocators.Background)).toBeTruthy();

    expect(getByTestId(createOptionTestId({ option: options[0], isSelected: false }))).toBeTruthy();
    expect(getByTestId(createOptionTestId({ option: options[1], isSelected: false }))).toBeTruthy();
    expect(getByTestId(createOptionTestId({ option: options[2], isSelected: false }))).toBeTruthy();

    fireEvent.changeText(getByTestId(SelectLocators.SearchField), "asha");

    expect(
      queryByTestId(createOptionTestId({ option: options[0], isSelected: false }))
    ).toBeFalsy();
    expect(
      queryByTestId(createOptionTestId({ option: options[1], isSelected: false }))
    ).toBeFalsy();
    expect(
      queryByTestId(createOptionTestId({ option: options[2], isSelected: false }))
    ).toBeFalsy();
  });

  it("Searchable, should reset search field after modal close", async () => {
    const student1 = createMockStudent({ name: "Masha1" });
    const student2 = createMockStudent({ name: "Masha2" });
    const student3 = createMockStudent();
    const options = [student1, student2, student3].map(createOptionFromStudent);
    const { getByTestId } = render(
      <Select onSelect={() => null} options={options} searchable multiple />
    );

    await fireEvent.press(getByTestId(PopupLocators.PressElement));
    expect(getByTestId(PopupLocators.Background)).toBeTruthy();

    expect(getByTestId(createOptionTestId({ option: options[0], isSelected: false }))).toBeTruthy();
    expect(getByTestId(createOptionTestId({ option: options[1], isSelected: false }))).toBeTruthy();
    expect(getByTestId(createOptionTestId({ option: options[2], isSelected: false }))).toBeTruthy();

    await fireEvent.changeText(getByTestId(SelectLocators.SearchField), "asha");

    await fireEvent.press(getByTestId(InputModalLocators.CloseText));

    expect(getByTestId(SelectLocators.SearchField).props.value).toBe("");
  });

  it("Searchable, should reset search field after confirm", async () => {
    const student1 = createMockStudent({ name: "Masha1" });
    const student2 = createMockStudent({ name: "Masha2" });
    const student3 = createMockStudent();
    const options = [student1, student2, student3].map(createOptionFromStudent);
    const { getByTestId } = render(
      <Select onSelect={() => null} options={options} searchable multiple />
    );

    await fireEvent.press(getByTestId(PopupLocators.PressElement));
    expect(getByTestId(PopupLocators.Background)).toBeTruthy();

    expect(getByTestId(createOptionTestId({ option: options[0], isSelected: false }))).toBeTruthy();
    expect(getByTestId(createOptionTestId({ option: options[1], isSelected: false }))).toBeTruthy();
    expect(getByTestId(createOptionTestId({ option: options[2], isSelected: false }))).toBeTruthy();

    await fireEvent.changeText(getByTestId(SelectLocators.SearchField), "asha");

    await fireEvent.press(getByTestId(InputModalLocators.ConfirmText));

    expect(getByTestId(SelectLocators.SearchField).props.value).toBe("");
  });
});
