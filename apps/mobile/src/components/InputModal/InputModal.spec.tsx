import React from "react";

import { fireEvent, render } from "@testing-library/react-native";

import { PopupLocators } from "../Popup/locators";
import { Typography } from "../Typography";
import { InputModal } from "./InputModal";
import { InputModalLocators } from "./locators";

describe("InputModal", () => {
  it("Initial. Should not display modal", () => {
    const { queryByTestId, getByText } = render(
      <InputModal
        onConfirm={() => null}
        pressElement={<Typography>Press</Typography>}
        onClose={() => null}
        input={null}
      />
    );

    expect(queryByTestId(PopupLocators.Background)).toBeFalsy();
    expect(getByText("Press")).toBeTruthy();
  });

  it("Open modal and close on close text press", async () => {
    const INPUT = <Typography>Input</Typography>;
    const { getByTestId, queryByTestId, getByText } = render(
      <InputModal
        onConfirm={() => null}
        pressElement={<Typography>Press</Typography>}
        onClose={() => null}
        input={INPUT}
      />
    );

    await fireEvent.press(getByTestId(PopupLocators.PressElement));
    expect(getByTestId(PopupLocators.Background)).toBeTruthy();
    expect(getByText("Input")).toBeTruthy();

    await fireEvent.press(getByTestId(InputModalLocators.CloseText));

    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(queryByTestId(PopupLocators.Background)).toBeFalsy();
  });

  it("Open modal and close on modal dim press", async () => {
    const { getByTestId, queryByTestId } = render(
      <InputModal
        onConfirm={() => null}
        pressElement={<Typography>Press</Typography>}
        onClose={() => null}
        input={null}
      />
    );

    await fireEvent.press(getByTestId(PopupLocators.PressElement));
    expect(getByTestId(PopupLocators.Background)).toBeTruthy();

    await fireEvent.press(getByTestId(PopupLocators.ModalDim));

    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(queryByTestId(PopupLocators.Background)).toBeFalsy();
  });

  it("Open modal, select value", async () => {
    const handleSelect = jest.fn();
    const { getByTestId, queryByTestId } = render(
      <InputModal
        onConfirm={handleSelect}
        pressElement={<Typography>Press</Typography>}
        onClose={() => null}
        input={null}
      />
    );

    await fireEvent.press(getByTestId(PopupLocators.PressElement));
    expect(getByTestId(PopupLocators.Background)).toBeTruthy();

    await fireEvent.press(getByTestId(InputModalLocators.ConfirmText));
    expect(handleSelect).toBeCalled();

    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(queryByTestId(PopupLocators.Background)).toBeFalsy();
  });
});
