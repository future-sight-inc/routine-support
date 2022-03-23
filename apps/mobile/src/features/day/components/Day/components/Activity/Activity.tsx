import React from "react";

import {
  Activity as ActivityType,
  ClockTypeEnum,
} from "@routine-support/domains";
import { stringifyTime } from "@routine-support/utils";
import { Layout, Text } from "@ui-kitten/components";
import { Image } from "react-native";
import AnalogClock from "react-native-clock-analog";

interface ActivityProps {
  activity: ActivityType;
  passed: boolean;
  clockType: ClockTypeEnum;
}

export const Activity: React.FC<ActivityProps> = ({
  activity,
  passed = true,
  clockType,
}) => {
  return (
    <Layout
      style={{
        padding: 16,
        flex: 1,
        flexDirection: "row",
        opacity: passed ? 0.3 : undefined,
      }}
    >
      <Image
        source={{
          uri: activity.pictogram,
        }}
        style={{ width: 120, height: 120 }}
      />
      <Layout style={{ marginLeft: 16 }}>
        <Text category="h6" style={{ marginBottom: 8 }}>
          {activity.name}
        </Text>
        {clockType === ClockTypeEnum.Digital && (
          <Text category="s1" appearance="hint">
            {stringifyTime(activity.start)}-{stringifyTime(activity.end)}
          </Text>
        )}
        {clockType === ClockTypeEnum.Analog && (
          <AnalogClock
            colorHour="#000000"
            colorMinutes="#000000"
            hour={activity.start.hours()}
            minutes={activity.start.minutes()}
            size={90}
          />
        )}
      </Layout>
    </Layout>
  );
};
