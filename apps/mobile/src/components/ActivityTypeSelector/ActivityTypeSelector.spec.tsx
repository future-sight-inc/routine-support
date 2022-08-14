import React from "react";

import { fireEvent, render } from "@testing-library/react-native";

import { ActivityTypeSelector } from "./ActivityTypeSelector";
import { ActivityTypeSelectorLocators, createActiveTypeTestId } from "./locators";

describe("ActivityTypeSelector", () => {
  it("Show display value", () => {
    const { getByTestId } = render(<ActivityTypeSelector value={false} onSelect={() => null} />);

    expect(
      getByTestId(
        createActiveTypeTestId({
          locator: ActivityTypeSelectorLocators.Common,
          isSelected: false,
        })
      )
    );
    expect(
      getByTestId(
        createActiveTypeTestId({
          locator: ActivityTypeSelectorLocators.Individual,
          isSelected: true,
        })
      )
    );
  });

  it("Click on type, display value", async () => {
    const handleSelect = jest.fn();
    const { getByTestId } = render(<ActivityTypeSelector value={true} onSelect={handleSelect} />);

    await fireEvent.press(
      getByTestId(
        createActiveTypeTestId({
          locator: ActivityTypeSelectorLocators.Individual,
          isSelected: false,
        })
      )
    );

    expect(
      getByTestId(
        createActiveTypeTestId({
          locator: ActivityTypeSelectorLocators.Individual,
          isSelected: true,
        })
      )
    );
    expect(
      getByTestId(
        createActiveTypeTestId({
          locator: ActivityTypeSelectorLocators.Common,
          isSelected: false,
        })
      )
    );
    expect(handleSelect).toBeCalledWith(false);
  });
});
