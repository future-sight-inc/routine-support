import React from "react";

import { stringifyDate, stringifyTime } from "@routine-support/utils";
import { fireEvent, render } from "@testing-library/react-native";
import moment from "moment";

import { InputModalLocators } from "../InputModal/locators";
import { DateSelector } from "./DateSelector";
import { DateSelectorLocators } from "./locators";

describe("DateSelector", () => {
  it("Renders current date, without mode prop", () => {
    const value = moment();
    const handleSelect = jest.fn();
    const { getByTestId } = render(<DateSelector onSelect={handleSelect} value={value} />);

    expect(getByTestId(DateSelectorLocators.Input).props.value).toBe(stringifyDate(value));
  });

  it("Renders current date with mode prop", () => {
    const value = moment();
    const handleSelect = jest.fn();
    const { getByTestId } = render(
      <DateSelector onSelect={handleSelect} value={value} mode="date" />
    );

    expect(getByTestId(DateSelectorLocators.Input).props.value).toBe(stringifyDate(value));
  });

  it("Renders current time", () => {
    const value = moment();
    const handleSelect = jest.fn();
    const { getByTestId } = render(
      <DateSelector onSelect={handleSelect} value={value} mode="time" />
    );

    expect(getByTestId(DateSelectorLocators.Input).props.value).toBe(stringifyTime(value));
  });

  it("Open modal, select value", async () => {
    const value = moment();
    const handleSelect = jest.fn();
    const { getByTestId, queryByTestId } = render(
      <DateSelector onSelect={handleSelect} value={value} />
    );

    expect(getByTestId(DateSelectorLocators.Input).props.value).toBe(stringifyDate(moment()));

    await fireEvent.press(getByTestId(InputModalLocators.PressElement));
    expect(getByTestId(InputModalLocators.Background)).toBeTruthy();

    await fireEvent.press(getByTestId(InputModalLocators.ConfirmText));
    expect(handleSelect).toBeCalledWith(value);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(queryByTestId(InputModalLocators.Background)).toBeFalsy();
  });
});
