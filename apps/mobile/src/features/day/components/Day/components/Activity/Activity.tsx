import React from "react";

import {
  Activity as ActivityType,
  ClockTypeEnum,
} from "@routine-support/domains";
import { Layout, Text } from "@ui-kitten/components";
import { Image, StyleSheet } from "react-native";
import { Dimensions } from "react-native";

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
        <Text category="h5" style={styles.activityName} numberOfLines={2}>
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
    image: { width: 160, height: 160, borderRadius: 5 },
    infoWrapper: {
      marginLeft: 16,
      flexDirection: "column",
      alignItems: "center",
      width: Dimensions.get("screen").width - 208,
    },
    activityName: {
      marginBottom: 8,
      textAlign: "center",
    },
  });
