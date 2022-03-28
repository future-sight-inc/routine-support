import React from "react";

import { ClockTypeEnum } from "@routine-support/domains";
import { stringifyTime } from "@routine-support/utils";
import { Text } from "@ui-kitten/components";
import { Moment } from "moment";
import AnalogClock from "react-native-clock-analog";

export enum ClockSizeEnum {
  Small = 90,
  Large = 110,
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
        <Text category="s1" appearance="hint">
          {stringifyTime(start)}-{stringifyTime(end)}
        </Text>
      );
    case ClockTypeEnum.Analog:
      return (
        <AnalogClock
          colorHour="black"
          colorMinutes="black"
          hour={start.hours()}
          minutes={start.minutes()}
          size={size}
        />
      );
    default:
      return null;
  }
};
