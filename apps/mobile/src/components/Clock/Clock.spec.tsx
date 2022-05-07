import { ClockTypeEnum } from "@routine-support/domains";
import { createMockActivity } from "@routine-support/test-utils";
import { cleanup, render } from "@testing-library/react-native";

import "@testing-library/jest-native";
import { AppWrapper } from "../../app";
import { Clock, ClockSizeEnum } from "./Clock";
import { ClockLocators } from "./locators";

afterEach(cleanup);

describe("Clock", () => {
  it("Digital clock", () => {
    const activity = createMockActivity();

    const { queryByTestId } = render(
      <AppWrapper>
        <Clock
          start={activity.start}
          end={activity.end}
          type={ClockTypeEnum.Digital}
          size={ClockSizeEnum.Large}
        />
      </AppWrapper>
    );

    expect(queryByTestId(ClockLocators.DigitalClock)).toHaveTextContent(
      "10000"
    );
  });
});
