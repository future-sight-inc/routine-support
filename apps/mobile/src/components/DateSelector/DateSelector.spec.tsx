import React from "react";

import { OverlayProvider } from "@react-native-aria/overlays";
import { fireEvent, render } from "@testing-library/react-native";
import moment from "moment";

import { InputModalLocators } from "../InputModal/locators";
import { Typography } from "../Typography";
import { DateSelector } from "./DateSelector";

describe("DateSelector", () => {
  it("Open modal, select value", async () => {
    const value = moment();
    const handleSelect = jest.fn();
    const { getByTestId, queryByTestId } = render(
      <OverlayProvider>
        <DateSelector
          onSelect={handleSelect}
          value={value}
          pressElement={<Typography>Press</Typography>}
        />
      </OverlayProvider>
    );

    await fireEvent.press(getByTestId(InputModalLocators.PressElement));
    expect(getByTestId(InputModalLocators.Background)).toBeTruthy();

    await fireEvent.press(getByTestId(InputModalLocators.ConfirmText));
    expect(handleSelect).toBeCalledWith(value);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(queryByTestId(InputModalLocators.Background)).toBeFalsy();
  });
});
