import React from "react";

import {
  Activity,
  Activity as ActivityType,
  ClockTypeEnum,
} from "@routine-support/domains";
import { Button, Icon, Layout, Text } from "@ui-kitten/components";
import { Dimensions } from "react-native";
import { Image, StyleSheet } from "react-native";

import { Clock, ClockSizeEnum } from "../../../../../../components/Clock";

interface CurrentActivityProps {
  activity: ActivityType;
  clockType: ClockTypeEnum;
  onConfirm: (activity: Activity) => void;
  confirmed: boolean;
}

export const CurrentActivity: React.FC<CurrentActivityProps> = ({
  activity,
  clockType,
  onConfirm,
  confirmed,
}) => {
  const handleConfirmActivity = () => {
    onConfirm(activity);
  };

  return (
    <Layout style={styles.wrapper}>
      <Layout style={styles.infoWrapper}>
        <Image
          source={{
            uri: activity.pictogram,
          }}
          style={styles.image}
        />
        <Layout style={styles.clockWrapper}>
          <Text category="h5" style={styles.name} numberOfLines={2}>
            {activity.name}
          </Text>
          <Clock
            start={activity.start}
            end={activity.end}
            type={clockType}
            size={ClockSizeEnum.Large}
          />
        </Layout>
      </Layout>
      <Button
        style={styles.confirmButton}
        status="success"
        onPress={handleConfirmActivity}
        disabled={confirmed}
        accessoryRight={(props) => (
          <Icon
            {...props}
            name="checkmark-outline"
            style={styles.confirmIcon}
            fill="white"
          />
        )}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    flex: 1,
    flexDirection: "column",
  },
  image: { width: 200, height: 200, borderRadius: 5 },
  infoWrapper: {
    flexDirection: "row",
  },
  name: { marginBottom: 8, textAlign: "center" },
  clockWrapper: {
    marginLeft: 8,
    width: Dimensions.get("screen").width - 240,
    flexDirection: "column",
    alignItems: "center",
  },
  confirmButton: { height: 80, marginTop: 16 },
  confirmIcon: { width: 60, height: 60 },
});
