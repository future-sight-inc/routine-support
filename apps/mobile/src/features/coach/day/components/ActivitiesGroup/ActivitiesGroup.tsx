import React from "react";

import {
  ActivitiesGroup as ActivitiesGroupType,
  Activity as ActivityType,
  Student,
} from "@routine-support/domains";
import { StyleSheet, View } from "react-native";

import { Activity } from "../Activity";
import { getActivityDurationInHours, getTimeInHours, getTimelineMargin } from "./utils";

interface ActivitiesGroup {
  group: ActivitiesGroupType;
  students: Student[];
  rowHeight: number;
  onActivityPress: (activity: ActivityType) => void;
  onConfirmationStatusPress: (activity: ActivityType) => void;
}

export const ActivitiesGroup: React.FC<ActivitiesGroup> = ({
  group,
  students,
  rowHeight,
  onActivityPress,
  onConfirmationStatusPress,
}) => {
  return (
    <View style={{ ...styles.wrapper, marginTop: (group.start.get("minutes") / 60) * rowHeight }}>
      {group.activities.map((activity, index) => (
        <Activity
          key={index}
          activity={activity}
          students={students}
          onActivityPress={() => onActivityPress(activity)}
          onConfirmationStatusPress={() => onConfirmationStatusPress(activity)}
          style={{
            width: `${100 / group.activities.length}%`,
            height:
              getActivityDurationInHours(activity) * rowHeight -
              getTimelineMargin(activity.end) -
              getTimelineMargin(activity.start),
            marginTop:
              (getTimeInHours(activity.start) - getTimeInHours(group.start)) * rowHeight + 4,
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
    top: 0,
    right: 0,
    width: "100%",
    position: "absolute",
    zIndex: 100,
  },
});
