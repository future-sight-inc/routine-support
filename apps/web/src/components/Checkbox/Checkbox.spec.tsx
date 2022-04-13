import "@testing-library/jest-dom";
import React from "react";

import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { AppWrapper } from "../AppWrapper";
import { Checkbox } from "./Checkbox";
import { CheckboxLocators } from "./locators";

afterEach(cleanup);

describe("Checkbox", () => {
  it("Show display value", () => {
    const { getByTestId } = render(
      <AppWrapper>
        <Checkbox label="Label" value={true} onChange={() => null} />
      </AppWrapper>
    );

    expect(getByTestId(CheckboxLocators.CheckedIcon)).toBeVisible();
  });

  it("Click on icon, display value", async () => {
    const { getByTestId } = render(
      <AppWrapper>
        <Checkbox label="Label" onChange={() => null} />
      </AppWrapper>
    );

    expect(getByTestId(CheckboxLocators.EmptyIcon)).toBeVisible();

    await userEvent.click(getByTestId(CheckboxLocators.EmptyIcon));

    expect(getByTestId(CheckboxLocators.CheckedIcon)).toBeVisible();
  });

  it("Click on wrapper, display value", async () => {
    const { getByTestId } = render(
      <AppWrapper>
        <Checkbox label="Label" onChange={() => null} />
      </AppWrapper>
    );

    expect(getByTestId(CheckboxLocators.EmptyIcon)).toBeVisible();

    await userEvent.click(getByTestId(CheckboxLocators.Wrapper));

    expect(getByTestId(CheckboxLocators.CheckedIcon)).toBeVisible();
  });
});
