import React from "react";

import {
  Activity,
  Activity as ActivityType,
  ClockTypeEnum,
} from "@routine-support/domains";
import { Button, Icon, Layout, Text } from "@ui-kitten/components";
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
      <Image
        source={{
          uri: activity.pictogram,
        }}
        style={styles.image}
      />
      <Layout style={styles.infoWrapper}>
        <Text category="h5" style={styles.name}>
          {activity.name}
        </Text>
        <Layout style={styles.clockWrapper}>
          <Clock
            start={activity.start}
            end={activity.end}
            type={clockType}
            size={ClockSizeEnum.Large}
          />
        </Layout>
        <Button
          style={styles.confirmButton}
          onPress={handleConfirmActivity}
          disabled={confirmed}
          accessoryLeft={
            <Icon
              fill={confirmed ? "lightgrey" : "white"}
              name="checkmark-outline"
            />
          }
        />
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    flex: 1,
    flexDirection: "row",
  },
  image: { width: "50%", height: 200 },
  infoWrapper: { marginLeft: 16, width: "50%", paddingRight: 16 },
  name: { marginBottom: 8, textAlign: "center" },
  clockWrapper: { flexDirection: "row", justifyContent: "center" },
  confirmButton: { marginTop: "auto" },
});
