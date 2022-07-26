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
import { CurrentTimeLine } from "../CurrentTimeLine";

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
          rowWidth={ROW_WIDTH}
        />
      )
    );
  };

  return (
    <FlatList
      data={timeRange}
      ListHeaderComponent={
        <CurrentTimeLine rowHeight={ROW_HEIGHT} timeColumnWidth={TIME_COLUMN_WIDTH} />
      }
      ListHeaderComponentStyle={{ zIndex: 1 }}
      renderItem={({ item, index }) => (
        <View style={styles.row} key={index}>
          <View style={styles.timeColumn}>
            {index === 0 ? (
              <View />
            ) : (
              <Typography variant="text3" color="secondary" style={styles.timeText}>
                {item}
              </Typography>
            )}
            <View style={styles.dash} />
            <View />
          </View>
          <View
            style={{
              ...styles.bodyColumn,
            }}
          >
            {renderActivitiesGroup(item)}
          </View>
        </View>
      )}
      keyExtractor={(item) => item}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

const ROW_HEIGHT = 120;
const ROW_WIDTH = Dimensions.get("screen").width - 100;
const TIME_COLUMN_WIDTH = 45;
const COLUMNS_GAP = 24;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  timeColumn: {
    width: TIME_COLUMN_WIDTH,
    height: ROW_HEIGHT,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  timeText: {
    marginTop: -8,
    marginLeft: 4,
  },
  dash: {
    height: 1,
    width: 12,
    marginLeft: 4,
    backgroundColor: MobileTheme.palette.secondary.main,
  },
  bodyColumn: {
    marginLeft: COLUMNS_GAP,
  },
  separator: {
    marginLeft: TIME_COLUMN_WIDTH + COLUMNS_GAP,
    width: "100%",
    height: 1,
    backgroundColor: MobileTheme.palette.border.light,
    zIndex: 10,
  },
});
