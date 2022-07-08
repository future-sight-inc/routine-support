import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import { Button } from "./Button";
import { ButtonLocators } from "./locators";

describe("Button", () => {
  const BUTTON_TEXT = "Text";

  it("Has proper text", () => {
    const { getByTestId } = render(<Button text={BUTTON_TEXT} />);

    expect(getByTestId(ButtonLocators.Text)).toHaveTextContent(BUTTON_TEXT);
  });

  it("Has no icon", () => {
    const { queryByTestId } = render(<Button text={BUTTON_TEXT} />);

    expect(queryByTestId(ButtonLocators.IconWrapper)).toBeFalsy();
  });

  it("Has icon", () => {
    const { queryByTestId } = render(<Button text={BUTTON_TEXT} icon="add" />);

    expect(queryByTestId(ButtonLocators.IconWrapper)).toBeTruthy();
  });

  it("Press handler was called", () => {
    const handlePress = jest.fn();

    const { getByTestId } = render(<Button text={BUTTON_TEXT} onPress={handlePress} />);

    fireEvent.press(getByTestId(ButtonLocators.Wrapper));

    expect(handlePress).toHaveBeenCalled();
  });
});
