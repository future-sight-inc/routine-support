import React from "react";

import { ClockTypeEnum } from "@routine-support/domains";
import { stringifyTime } from "@routine-support/utils";
import { Text } from "@ui-kitten/components";
import { Moment } from "moment";
import AnalogClock from "react-native-clock-analog";
import { ClockLocators } from "./locators";
import { View } from "react-native";

export enum ClockSizeEnum {
  Small = 120,
  Large = 140,
}

interface ClockProps {
  start: Moment;
  end: Moment;
  type: ClockTypeEnum;
  size: ClockSizeEnum;
}

export const Clock: React.FC<ClockProps> = ({ start, end, type, size }) => {
  switch (type) {
  case ClockTypeEnum.Digital:
    return (
      <Text
        category="h6"
        appearance="hint"
        testID={ClockLocators.DigitalClock}
      >
        {stringifyTime(start)}-{stringifyTime(end)}
      </Text>
    );
  case ClockTypeEnum.Analog:
    return (
      <View testId={ClockLocators.AnalogClock}>
        <AnalogClock
          colorHour="black"
          colorMinutes="black"
          hour={start.hours()}
          minutes={start.minutes()}
          size={size}
        />
      </View>
    );
  default:
    return null;
  }
};
