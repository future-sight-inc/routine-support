import React from "react";

import {
  ActivitiesGroup as ActivitiesGroupType,
  Activity as ActivityType,
  Student,
} from "@routine-support/domains";
import { TIMELINE_MARGIN } from "apps/mobile/src/constants/TimelineMargin";
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
}

export const ActivitiesGroup: React.FC<ActivitiesGroup> = ({
  group,
  students,
  rowHeight,
  rowWidth,
  rowIndex,
  style,
  onActivityPress,
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
          style={{
            width: rowWidth / group.activities.length - TIMELINE_MARGIN,
            height: getActivityHeight({ activity, rowHeight }),
            marginTop: getActivityTopOffset({ activity, group, rowHeight }),
            marginRight: TIMELINE_MARGIN,
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
    zIndex: 3,
  },
});
