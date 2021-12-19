import React from "react";

import { Activity as ActivityType } from "@routine-support/domains";
import { stringifyTime } from "@routine-support/utils";
import { Layout, Text } from "@ui-kitten/components";
import { Image } from "react-native";

interface ActivityProps {
  activity: ActivityType;
}

export const Activity: React.FC<ActivityProps> = ({ activity }) => {
  return (
    <Layout
      style={{
        padding: 16,
        flex: 1,
        flexDirection: "row",
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
        <Text category="s1" appearance="hint">
          {stringifyTime(activity.start)}-{stringifyTime(activity.end)}
        </Text>
      </Layout>
    </Layout>
  );
};
