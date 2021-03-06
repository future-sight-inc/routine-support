import "@testing-library/jest-dom";
import React from "react";

import { render } from "@testing-library/react";

import { AppWrapper } from "../AppWrapper";
import { LabelWithHelper } from "./LabelWithHelper";
import { LabelWithHelperLocators } from "./locators";

describe("LabelWithHelper", () => {
  it("Should contain proper label", () => {
    const LABEL_TEXT = "Label";

    const { getByTestId } = render(
      <AppWrapper>
        <LabelWithHelper>{LABEL_TEXT}</LabelWithHelper>
      </AppWrapper>
    );

    expect(getByTestId(LabelWithHelperLocators.Label)).toHaveTextContent(LABEL_TEXT);
  });

  it("Should render icon", () => {
    const { getByTestId } = render(
      <AppWrapper>
        <LabelWithHelper helperText="Helper text">Label</LabelWithHelper>
      </AppWrapper>
    );

    expect(getByTestId(LabelWithHelperLocators.HelpIcon)).toBeVisible();
  });

  it("Should have proper helper text", () => {
    const HELPER_TEXT = "Helper text";

    const { getByTestId } = render(
      <AppWrapper>
        <LabelWithHelper helperText={HELPER_TEXT}>Label</LabelWithHelper>
      </AppWrapper>
    );

    expect(getByTestId(LabelWithHelperLocators.HelperText)).toHaveTextContent(HELPER_TEXT);
  });
});
