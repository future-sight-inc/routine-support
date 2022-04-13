import "@testing-library/jest-dom";
import React from "react";

import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ColorEnum } from "../../constants/ColorEnum";
import { AppWrapper } from "../AppWrapper";
import { ColorPicker } from "./ColorPicker";
import { createActiveColorDataTestId, createColorDataTestId } from "./locators";

afterEach(cleanup);

describe("ColorPicker", () => {
  it("Show display value", () => {
    const { getByTestId } = render(
      <AppWrapper>
        <ColorPicker value={ColorEnum.Orange} onChange={() => null} />
      </AppWrapper>
    );

    expect(
      getByTestId(createActiveColorDataTestId(ColorEnum.Orange))
    ).toBeVisible();
  });

  it("Click on color, display value", async () => {
    const { getByTestId } = render(
      <AppWrapper>
        <ColorPicker onChange={() => null} />
      </AppWrapper>
    );

    const colorToClick = getByTestId(createColorDataTestId(ColorEnum.Orange));

    await userEvent.click(colorToClick);

    expect(
      getByTestId(createActiveColorDataTestId(ColorEnum.Orange))
    ).toBeVisible();
  });
});
