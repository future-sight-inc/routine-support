import React from "react";

import { stringifyDate, stringifyTime } from "@routine-support/utils";
import { fireEvent, render } from "@testing-library/react-native";

import { InputModalLocators } from "../InputModal/locators";
import { PopupLocators } from "../Popup/locators";
import { DateSelector } from "./DateSelector";
import { DateSelectorLocators } from "./locators";

describe("DateSelector", () => {
  it("Renders current date, without mode prop", () => {
    const value = new Date();
    const handleSelect = jest.fn();
    const { getByTestId } = render(<DateSelector onSelect={handleSelect} value={value} />);

    expect(getByTestId(DateSelectorLocators.Input).props.value).toBe(stringifyDate(value));
  });

  it("Renders current date with mode prop", () => {
    const value = new Date();
    const handleSelect = jest.fn();
    const { getByTestId } = render(
      <DateSelector onSelect={handleSelect} value={value} mode="date" />
    );

    expect(getByTestId(DateSelectorLocators.Input).props.value).toBe(stringifyDate(value));
  });

  it("Renders current time", () => {
    const value = new Date();
    const handleSelect = jest.fn();
    const { getByTestId } = render(
      <DateSelector onSelect={handleSelect} value={value} mode="time" />
    );

    expect(getByTestId(DateSelectorLocators.Input).props.value).toBe(stringifyTime(value));
  });

  it("Open modal, select value", async () => {
    const value = new Date();
    const handleSelect = jest.fn();
    const { getByTestId, queryByTestId } = render(
      <DateSelector onSelect={handleSelect} value={value} />
    );

    expect(getByTestId(DateSelectorLocators.Input).props.value).toBe(stringifyDate(new Date()));

    await fireEvent.press(getByTestId(PopupLocators.PressElement));
    expect(getByTestId(PopupLocators.Background)).toBeTruthy();

    await fireEvent.press(getByTestId(InputModalLocators.ConfirmText));
    expect(handleSelect).toBeCalledWith(value);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(queryByTestId(PopupLocators.Background)).toBeFalsy();
  });
});
