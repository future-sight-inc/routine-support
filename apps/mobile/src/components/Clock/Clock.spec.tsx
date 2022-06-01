import { ClockTypeEnum, createMockActivity } from "@routine-support/domains";
import { parseTime } from "@routine-support/utils";
import { render } from "@testing-library/react-native";
import React from "react";
import { AppWrapper } from "../AppWrapper";
import { Clock, ClockSizeEnum } from "./Clock";
import { ClockLocators } from "./locators";

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
