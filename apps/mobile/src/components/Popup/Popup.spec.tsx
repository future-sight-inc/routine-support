import React from "react";

import { fireEvent, render } from "@testing-library/react-native";

import { Typography } from "../Typography";
import { PopupLocators } from "./locators";
import { Popup } from "./Popup";

describe("Popup", () => {
  it("Initial. Should not display popup", () => {
    const { queryByTestId, getByText } = render(
      <Popup pressElement={<Typography>Press</Typography>}>{null}</Popup>
    );

    expect(queryByTestId(PopupLocators.Background)).toBeFalsy();
    expect(getByText("Press")).toBeTruthy();
  });

  it("Open popup and close on popup dim press", async () => {
    const { getByTestId, queryByTestId } = render(
      <Popup pressElement={<Typography>Press</Typography>}>{null}</Popup>
    );

    await fireEvent.press(getByTestId(PopupLocators.PressElement));
    expect(getByTestId(PopupLocators.Background)).toBeTruthy();

    await fireEvent.press(getByTestId(PopupLocators.ModalDim));

    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(queryByTestId(PopupLocators.Background)).toBeFalsy();
  });

  it("Default opened", async () => {
    const { getByTestId } = render(
      <Popup isOpened pressElement={<Typography>Press</Typography>}>
        {null}
      </Popup>
    );

    expect(getByTestId(PopupLocators.Background)).toBeTruthy();
  });

  it("Calls onOpen callback", async () => {
    const handleOpen = jest.fn();
    const { getByTestId } = render(
      <Popup pressElement={<Typography>Press</Typography>} onOpen={handleOpen}>
        {null}
      </Popup>
    );

    await fireEvent.press(getByTestId(PopupLocators.PressElement));
    expect(getByTestId(PopupLocators.Background)).toBeTruthy();
    expect(handleOpen).toBeCalled();
  });

  it("Calls onClose callback", async () => {
    const handleClose = jest.fn();
    const { getByTestId, queryByTestId } = render(
      <Popup pressElement={<Typography>Press</Typography>} onOpen={handleClose}>
        {null}
      </Popup>
    );

    await fireEvent.press(getByTestId(PopupLocators.PressElement));
    expect(getByTestId(PopupLocators.Background)).toBeTruthy();

    await fireEvent.press(getByTestId(PopupLocators.ModalDim));

    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(queryByTestId(PopupLocators.Background)).toBeFalsy();
    expect(handleClose).toBeCalled();
  });
});
