import React from "react";

import {
  Activity as ActivityType,
  ClockTypeEnum,
} from "@routine-support/domains";
import { Layout, Text } from "@ui-kitten/components";
import { Image, StyleSheet } from "react-native";

import { Clock, ClockSizeEnum } from "../../../../../../components/Clock";

interface ActivityProps {
  activity: ActivityType;
  isPassed: boolean;
  clockType: ClockTypeEnum;
}

export const Activity: React.FC<ActivityProps> = ({
  activity,
  isPassed = true,
  clockType,
}) => {
  const styles = createStyles({ isPassed });

  return (
    <Layout style={styles.wrapper}>
      <Image
        source={{
          uri: activity.pictogram,
        }}
        style={styles.image}
      />
      <Layout style={styles.infoWrapper}>
        <Text category="h6" style={styles.activityName}>
          {activity.name}
        </Text>
        <Clock
          start={activity.start}
          end={activity.end}
          type={clockType}
          size={ClockSizeEnum.Small}
        />
      </Layout>
    </Layout>
  );
};

const createStyles = (props: { isPassed: boolean }) =>
  StyleSheet.create({
    wrapper: {
      padding: 16,
      flex: 1,
      flexDirection: "row",
      opacity: props.isPassed ? 0.3 : undefined,
    },
    image: { width: 120, height: 120 },
    infoWrapper: { marginLeft: 16 },
    activityName: { marginBottom: 8 },
  });
