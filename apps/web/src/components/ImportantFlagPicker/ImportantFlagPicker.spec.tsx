import "@testing-library/jest-dom";
import React from "react";

import { cleanup, render } from "@testing-library/react";

import { AppWrapper } from "../AppWrapper";
import { ImportantFlagPicker } from "./ImportantFlagPicker";
import { ImportantFlagPickerLocators } from "./locators";

afterEach(cleanup);

describe("ImportantFlagPicker", () => {
  it("Show message on checked", () => {
    const { getByTestId } = render(
      <AppWrapper>
        <ImportantFlagPicker value={true} onChange={() => null} />
      </AppWrapper>
    );

    expect(getByTestId(ImportantFlagPickerLocators.Message)).toBeVisible();
  });

  it("Hide message on unchecked", () => {
    const { queryByTestId } = render(
      <AppWrapper>
        <ImportantFlagPicker value={false} onChange={() => null} />
      </AppWrapper>
    );

    expect(queryByTestId(ImportantFlagPickerLocators.Message)).toBeFalsy();
  });
});
