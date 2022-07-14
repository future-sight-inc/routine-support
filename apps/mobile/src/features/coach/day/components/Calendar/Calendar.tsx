import React from "react";

import {
  ActivitiesGroup as ActivitiesGroupType,
  Activity as ActivityType,
  groupActivities,
  Student,
} from "@routine-support/domains";
import { TimeString } from "@routine-support/types";
import { Typography } from "apps/mobile/src/components/Typography";
import { MobileTheme } from "apps/mobile/src/theme";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";

import { ActivitiesGroup } from "../ActivitiesGroup";

interface CalendarProps {
  timeRange: TimeString[];
  activities: ActivityType[];
  students: Student[];
  onActivityPress: (activity: ActivityType) => void;
  onConfirmationStatusPress: (activity: ActivityType) => void;
}

export const Calendar: React.FC<CalendarProps> = ({
  timeRange,
  activities,
  students,
  onActivityPress,
  onConfirmationStatusPress,
}) => {
  const activitiesGroups = groupActivities(activities);

  const getGroupByTime = (time: TimeString, activitiesGroups: ActivitiesGroupType[]) => {
    const [hour] = time.split(":");
    const filteredGroup = activitiesGroups.find(
      (activityGroup) => activityGroup.start.get("h") === Number(hour)
    );

    return filteredGroup;
  };

  const renderActivitiesGroup = (time: TimeString) => {
    const group = getGroupByTime(time, activitiesGroups);

    return (
      group && (
        <ActivitiesGroup
          group={group}
          students={students}
          rowHeight={ROW_HEIGHT}
          onActivityPress={onActivityPress}
          onConfirmationStatusPress={onConfirmationStatusPress}
        />
      )
    );
  };

  return (
    <FlatList
      data={timeRange}
      renderItem={({ item, index }) => (
        <View style={styles.row} key={index}>
          <View style={styles.timeColumn}>
            <View />
            <View style={styles.dash} />
            <Typography variant="text3" color="secondary">
              {item}
            </Typography>
          </View>
          <View
            style={{
              ...styles.bodyColumn,
              borderBottomWidth: index + 1 === timeRange.length ? 0 : 1,
            }}
          >
            {renderActivitiesGroup(item)}
          </View>
        </View>
      )}
    />
  );
};

const ROW_HEIGHT = 120;

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    overflow: "scroll",
  },
  row: { flexDirection: "row" },
  timeColumn: {
    width: 45,
    height: ROW_HEIGHT,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  dash: {
    height: 1,
    width: 12,
    backgroundColor: MobileTheme.palette.secondary.main,
  },
  bodyColumn: {
    width: Dimensions.get("screen").width - 45 - 8,
    borderColor: MobileTheme.palette.border.light,
    marginLeft: 8,
  },
});
