import React from "react";

import { OverlayProvider } from "@react-native-aria/overlays";
import { fireEvent, render } from "@testing-library/react-native";
import moment from "moment";

import { Typography } from "../Typography";
import { DateSelector } from "./DateSelector";
import { DateSelectorLocators } from "./locators";

describe("DateSelector", () => {
  it("Initial. Should not display modal", () => {
    const { queryByTestId, getByText } = render(
      <OverlayProvider>
        <DateSelector onSelect={() => null} pressElement={<Typography>Press</Typography>} />
      </OverlayProvider>
    );

    expect(queryByTestId(DateSelectorLocators.Background)).toBeFalsy();
    expect(getByText("Press")).toBeTruthy();
  });

  it("Open modal and close on close text press", async () => {
    const { getByTestId, queryByTestId } = render(
      <OverlayProvider>
        <DateSelector onSelect={() => null} pressElement={<Typography>Press</Typography>} />
      </OverlayProvider>
    );

    await fireEvent.press(getByTestId(DateSelectorLocators.PressElement));
    expect(getByTestId(DateSelectorLocators.Background)).toBeTruthy();

    await fireEvent.press(getByTestId(DateSelectorLocators.CloseText));

    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(queryByTestId(DateSelectorLocators.Background)).toBeFalsy();
  });

  it("Open modal and close on modal dim press", async () => {
    const { getByTestId, queryByTestId } = render(
      <OverlayProvider>
        <DateSelector onSelect={() => null} pressElement={<Typography>Press</Typography>} />
      </OverlayProvider>
    );

    await fireEvent.press(getByTestId(DateSelectorLocators.PressElement));
    expect(getByTestId(DateSelectorLocators.Background)).toBeTruthy();

    await fireEvent.press(getByTestId(DateSelectorLocators.ModalDim));

    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(queryByTestId(DateSelectorLocators.Background)).toBeFalsy();
  });

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

    await fireEvent.press(getByTestId(DateSelectorLocators.PressElement));
    expect(getByTestId(DateSelectorLocators.Background)).toBeTruthy();

    await fireEvent.press(getByTestId(DateSelectorLocators.ConfirmText));
    expect(handleSelect).toBeCalledWith(value);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(queryByTestId(DateSelectorLocators.Background)).toBeFalsy();
  });
});
