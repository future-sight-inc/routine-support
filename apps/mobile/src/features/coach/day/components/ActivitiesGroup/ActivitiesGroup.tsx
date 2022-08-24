import React from "react";

import {
  ActivitiesGroup as ActivitiesGroupType,
  Activity as ActivityType,
  Student,
} from "@routine-support/domains";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

import { Activity } from "../Activity";
import { getActivitiesGroupTopOffset, getActivityHeight, getActivityTopOffset } from "./utils";

interface ActivitiesGroup {
  group: ActivitiesGroupType;
  students: Student[];
  rowHeight: number;
  rowWidth: number;
  rowIndex: number;
  style: StyleProp<ViewStyle>;
  onActivityPress: (activity: ActivityType) => void;
  onConfirmationStatusPress: (activity: ActivityType) => void;
}

export const ActivitiesGroup: React.FC<ActivitiesGroup> = ({
  group,
  students,
  rowHeight,
  rowWidth,
  rowIndex,
  style,
  onActivityPress,
  onConfirmationStatusPress,
}) => {
  return (
    <View
      style={[
        styles.wrapper,
        {
          top: getActivitiesGroupTopOffset({ group, rowHeight, rowIndex }),
          width: rowWidth,
        },
        style,
      ]}
    >
      {group.activities.map((activity, index) => (
        <Activity
          key={index}
          activity={activity}
          students={students}
          onActivityPress={() => onActivityPress(activity)}
          onConfirmationStatusPress={() => onConfirmationStatusPress(activity)}
          style={{
            width: rowWidth / group.activities.length - 4,
            height: getActivityHeight({ activity, rowHeight }),
            marginTop: getActivityTopOffset({ activity, group, rowHeight }),
            marginRight: 4,
          }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    right: 0,
    left: 0,
    position: "absolute",
    zIndex: 10,
  },
});
