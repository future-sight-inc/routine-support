import React from "react";

import {
  ActivitiesGroup as ActivitiesGroupType,
  Activity as ActivityType,
  groupActivities,
  Student,
} from "@routine-support/domains";
import { TimeString } from "@routine-support/types";
import { parseTime } from "@routine-support/utils";
import { Typography } from "apps/mobile/src/components/Typography";
import { Theme } from "apps/mobile/src/theme";
import {
  Dimensions,
  ScrollView,
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";

import { ActivitiesGroup } from "./components/ActivitiesGroup";
import { CurrentTimeLine } from "./components/CurrentTimeLine";

export type ActivityComponent = React.FC<{
  activity: ActivityType;
  students: Student[];
  style: StyleProp<ViewStyle>;
  onActivityPress: (activity: ActivityType) => void;
}>;

interface CalendarProps {
  loading: boolean;
  isToday: boolean;
  timeRange?: TimeString[];
  activities?: ActivityType[];
  students: Student[];
  onActivityPress: (activity: ActivityType) => void;
  onCellPress: (activity: Partial<ActivityType>) => void;
  ActivityComponent: ActivityComponent;
}

export const Calendar: React.FC<CalendarProps> = ({
  isToday,
  timeRange = [],
  activities = [],
  students,
  onActivityPress,
  onCellPress,
  ActivityComponent,
}) => {
  const activitiesGroups = groupActivities(activities);

  const getGroupByTime = (time: TimeString, activitiesGroups: ActivitiesGroupType[]) => {
    const [hour] = time.split(":");
    const filteredGroup = activitiesGroups.find(
      (activityGroup) => activityGroup.start.get("h") === Number(hour)
    );

    return filteredGroup;
  };

  console.log(activitiesGroups);

  const renderActivitiesGroup = (time: TimeString) => {
    const group = getGroupByTime(time, activitiesGroups);

    return (
      group && (
        <ActivitiesGroup
          group={group}
          students={students}
          rowIndex={timeRange.indexOf(time)}
          rowHeight={ROW_HEIGHT}
          rowWidth={ROW_WIDTH}
          onActivityPress={onActivityPress}
          style={{ marginLeft: TIME_COLUMN_WIDTH + COLUMNS_GAP }}
          ActivityComponent={ActivityComponent}
        />
      )
    );
  };

  const handleCellPress = (cellTime: string) => {
    const parsedTime = parseTime(cellTime);

    onCellPress({ start: parsedTime, end: parsedTime.clone().add(1, "hours") });
  };

  return (
    <ScrollView>
      {timeRange.map((time, index) => (
        <>
          <View style={styles.row}>
            <View style={styles.timeColumn}>
              {index === 0 ? (
                <View />
              ) : (
                <Typography variant="text3" color="secondary" style={styles.timeText}>
                  {time}
                </Typography>
              )}
              <View style={styles.dash} />
              <View />
            </View>
            <TouchableWithoutFeedback onPress={() => handleCellPress(time)}>
              <View style={styles.bodyColumn} />
            </TouchableWithoutFeedback>
          </View>
          {index !== timeRange.length - 1 && <View style={styles.separator} key={index} />}
          {renderActivitiesGroup(time)}
        </>
      ))}
      {isToday ? (
        <CurrentTimeLine
          rowHeight={ROW_HEIGHT}
          timeColumnWidth={TIME_COLUMN_WIDTH}
          columnsGap={COLUMNS_GAP}
        />
      ) : null}
    </ScrollView>
  );
};

const ROW_HEIGHT = 120;
const ROW_WIDTH = Dimensions.get("screen").width - 100;
const TIME_COLUMN_WIDTH = 45;
const COLUMNS_GAP = 24;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    zIndex: 1,
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
    backgroundColor: Theme.palette.secondary.main,
  },
  bodyColumn: {
    marginLeft: COLUMNS_GAP,
    zIndex: 1,
    width: "100%",
    height: ROW_HEIGHT,
  },
  separator: {
    marginLeft: TIME_COLUMN_WIDTH + COLUMNS_GAP,
    width: "100%",
    height: 1,
    backgroundColor: Theme.palette.border.light,
    zIndex: 0,
  },
});
