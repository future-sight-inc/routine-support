import React from "react";

import { Activity, Activity as ActivityType, ClockTypeEnum } from "@routine-support/domains";
import { Button, Icon, Layout, Text, useTheme } from "@ui-kitten/components";
import { Dimensions, ImageBackground } from "react-native";
import { StyleSheet } from "react-native";

import { Clock, ClockSizeEnum } from "../../../../../../../components/Clock";

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
  const theme = useTheme();
  const handleConfirmActivity = () => {
    onConfirm(activity);
  };

  return (
    <Layout style={styles.wrapper}>
      <Layout style={styles.infoWrapper}>
        <Layout style={styles.imageWrapper}>
          <ImageBackground
            source={{
              uri: activity.pictogram,
            }}
            style={styles.image}
          />
          {confirmed && (
            <>
              <Layout style={styles.iconBackground} />
              <Icon
                name="checkmark-circle-2"
                style={styles.icon}
                fill={theme["color-success-default"]}
              />
            </>
          )}
        </Layout>
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
      {!confirmed && (
        <Button
          status="success"
          style={styles.confirmButton}
          onPress={handleConfirmActivity}
          accessoryRight={(props) => (
            <Icon {...props} name="checkmark-outline" style={styles.confirmIcon} fill="white" />
          )}
        />
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    flex: 1,
    flexDirection: "column",
  },
  imageWrapper: {
    width: 200,
    height: 200,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    overflow: "hidden",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 5,
    position: "absolute",
  },
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
  iconBackground: { width: 100, height: 100, borderRadius: 60 },
  icon: {
    width: 120,
    height: 120,
    left: 0,
    top: 0,
    marginTop: -110,
  },
});
