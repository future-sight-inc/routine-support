import "@testing-library/jest-dom";
import React from "react";

import { ClockTypeEnum } from "@routine-support/domains";
import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { AppWrapper } from "../AppWrapper";
import { ClockTypePicker } from "./ClockTypePicker";
import { ClockTypePickerLocators, createClockTypeDataTestId } from "./locators";

afterEach(cleanup);

describe("ClockTypePicker", () => {
  it("Show display value", () => {
    const { getByTestId } = render(
      <AppWrapper>
        <ClockTypePicker value={ClockTypeEnum.Digital} onChange={() => null} />
      </AppWrapper>
    );

    expect(
      getByTestId(
        createClockTypeDataTestId({
          locator: ClockTypePickerLocators.Digital,
          isActive: true,
        })
      )
    ).toBeVisible();
  });

  it("Click on type, display value", async () => {
    const { getByTestId } = render(
      <AppWrapper>
        <ClockTypePicker onChange={() => null} />
      </AppWrapper>
    );

    const clockTypeToClick = getByTestId(
      createClockTypeDataTestId({
        locator: ClockTypePickerLocators.Analog,
        isActive: false,
      })
    );

    await userEvent.click(clockTypeToClick);

    expect(
      getByTestId(
        createClockTypeDataTestId({
          locator: ClockTypePickerLocators.Analog,
          isActive: true,
        })
      )
    ).toBeVisible();
  });
});
