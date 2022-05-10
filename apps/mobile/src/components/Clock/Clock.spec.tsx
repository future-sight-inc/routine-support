import { ClockTypeEnum } from "@routine-support/domains";
import { createMockActivity } from "@routine-support/test-utils";
import React from "react";
import { Clock, ClockSizeEnum } from "./Clock";
import { AppWrapper } from "../AppWrapper";
import { render } from "@testing-library/react-native";
import { ClockLocators } from "./locators";
import { parseTime } from "@routine-support/utils";

describe("Clock", () => {
  it("Digital clock", () => {
    const activity = createMockActivity({
      start: parseTime("10:00"),
      end: parseTime("11:00"),
    });
    const { getByTestId, findByText } = render(
      <AppWrapper>
        <Clock
          start={activity.start}
          end={activity.end}
          type={ClockTypeEnum.Digital}
          size={ClockSizeEnum.Large}
        />
      </AppWrapper>
    );

    expect(getByTestId(ClockLocators.DigitalClock)).toBeTruthy();
    expect(findByText("10:00-11:00")).toBeTruthy();
  });
});
