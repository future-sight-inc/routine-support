import React from "react";

import { fireEvent, render } from "@testing-library/react-native";

import { ClockTypeSelector } from "./ClockTypeSelector";
import { ClockTypeSelectorLocators, createActiveTypeTestId } from "./locators";

describe("ClockTypeSelector", () => {
  it("Show display value", () => {
    const { getByTestId } = render(<ClockTypeSelector value={false} onSelect={() => null} />);

    expect(
      getByTestId(
        createActiveTypeTestId({
          locator: ClockTypeSelectorLocators.Digital,
          isSelected: false,
        })
      )
    );
    expect(
      getByTestId(
        createActiveTypeTestId({
          locator: ClockTypeSelectorLocators.Analog,
          isSelected: true,
        })
      )
    );
  });

  it("Click on type, display value", async () => {
    const handleSelect = jest.fn();
    const { getByTestId } = render(<ClockTypeSelector value={true} onSelect={handleSelect} />);

    await fireEvent.press(
      getByTestId(
        createActiveTypeTestId({
          locator: ClockTypeSelectorLocators.Analog,
          isSelected: false,
        })
      )
    );

    expect(
      getByTestId(
        createActiveTypeTestId({
          locator: ClockTypeSelectorLocators.Analog,
          isSelected: true,
        })
      )
    );
    expect(
      getByTestId(
        createActiveTypeTestId({
          locator: ClockTypeSelectorLocators.Digital,
          isSelected: false,
        })
      )
    );
    expect(handleSelect).toBeCalledWith(false);
  });
});
