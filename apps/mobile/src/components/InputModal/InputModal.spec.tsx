import React from "react";

import { OverlayProvider } from "@react-native-aria/overlays";
import { fireEvent, render } from "@testing-library/react-native";

import { Typography } from "../Typography";
import { InputModal } from "./InputModal";
import { InputModalLocators } from "./locators";

describe("InputModal", () => {
  it("Initial. Should not display modal", () => {
    const { queryByTestId, getByText } = render(
      <OverlayProvider>
        <InputModal
          onConfirm={() => null}
          pressElement={<Typography>Press</Typography>}
          onClose={() => null}
          input={null}
        />
      </OverlayProvider>
    );

    expect(queryByTestId(InputModalLocators.Background)).toBeFalsy();
    expect(getByText("Press")).toBeTruthy();
  });

  it("Open modal and close on close text press", async () => {
    const INPUT = <Typography>Input</Typography>;
    const { getByTestId, queryByTestId, getByText } = render(
      <OverlayProvider>
        <InputModal
          onConfirm={() => null}
          pressElement={<Typography>Press</Typography>}
          onClose={() => null}
          input={INPUT}
        />
      </OverlayProvider>
    );

    await fireEvent.press(getByTestId(InputModalLocators.PressElement));
    expect(getByTestId(InputModalLocators.Background)).toBeTruthy();
    expect(getByText("Input")).toBeTruthy();

    await fireEvent.press(getByTestId(InputModalLocators.CloseText));

    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(queryByTestId(InputModalLocators.Background)).toBeFalsy();
  });

  it("Open modal and close on modal dim press", async () => {
    const { getByTestId, queryByTestId } = render(
      <OverlayProvider>
        <InputModal
          onConfirm={() => null}
          pressElement={<Typography>Press</Typography>}
          onClose={() => null}
          input={null}
        />
      </OverlayProvider>
    );

    await fireEvent.press(getByTestId(InputModalLocators.PressElement));
    expect(getByTestId(InputModalLocators.Background)).toBeTruthy();

    await fireEvent.press(getByTestId(InputModalLocators.ModalDim));

    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(queryByTestId(InputModalLocators.Background)).toBeFalsy();
  });

  it("Open modal, select value", async () => {
    const handleSelect = jest.fn();
    const { getByTestId, queryByTestId } = render(
      <OverlayProvider>
        <InputModal
          onConfirm={handleSelect}
          pressElement={<Typography>Press</Typography>}
          onClose={() => null}
          input={null}
        />
      </OverlayProvider>
    );

    await fireEvent.press(getByTestId(InputModalLocators.PressElement));
    expect(getByTestId(InputModalLocators.Background)).toBeTruthy();

    await fireEvent.press(getByTestId(InputModalLocators.ConfirmText));
    expect(handleSelect).toBeCalled();

    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(queryByTestId(InputModalLocators.Background)).toBeFalsy();
  });
});
