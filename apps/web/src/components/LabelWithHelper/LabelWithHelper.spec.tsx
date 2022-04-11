import "@testing-library/jest-dom";
import React from "react";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

    expect(getByTestId(LabelWithHelperLocators.Label)).toHaveTextContent(
      LABEL_TEXT
    );
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

    expect(getByTestId(LabelWithHelperLocators.HelperText)).toHaveTextContent(
      HELPER_TEXT
    );
  });

  it("Show helper text on hover, hide on mouse over", async () => {
    const { getByTestId } = render(
      <AppWrapper>
        <LabelWithHelper helperText="Helper text">Label</LabelWithHelper>
      </AppWrapper>
    );

    const HelpIcon = getByTestId(LabelWithHelperLocators.HelpIcon);
    const HelperText = getByTestId(LabelWithHelperLocators.HelperText);

    await userEvent.hover(HelpIcon);
    // todo resolve test
    expect(HelperText).toBeInTheDocument();

    await userEvent.unhover(getByTestId(LabelWithHelperLocators.HelpIcon));
    expect(HelperText).not.toBeVisible();
  });
});
