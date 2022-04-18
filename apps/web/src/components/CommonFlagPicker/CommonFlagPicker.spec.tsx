import "@testing-library/jest-dom";
import React from "react";

import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { AppWrapper } from "../AppWrapper";
import { CommonFlagPicker } from "./CommonFlagPicker";
import {
  CommonFlagPickerLocators,
  createActiveButtonDataTestId,
} from "./locators";

afterEach(cleanup);

describe("CommonFlagPicker", () => {
  it("Show display value", () => {
    const { getByTestId } = render(
      <AppWrapper>
        <CommonFlagPicker value={false} onChange={() => null} />
      </AppWrapper>
    );

    expect(
      getByTestId(
        createActiveButtonDataTestId(CommonFlagPickerLocators.Individual)
      )
    ).toBeVisible();
  });

  it("Click on type, display value", async () => {
    const { getByTestId } = render(
      <AppWrapper>
        <CommonFlagPicker onChange={() => null} />
      </AppWrapper>
    );

    const buttonToClick = getByTestId(CommonFlagPickerLocators.Individual);

    await userEvent.click(buttonToClick);

    expect(
      getByTestId(
        createActiveButtonDataTestId(CommonFlagPickerLocators.Individual)
      )
    ).toBeVisible();
  });
});
