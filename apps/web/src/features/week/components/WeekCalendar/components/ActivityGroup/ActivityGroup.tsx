import React from "react";

import { Activity, Student } from "@routine-support/models";
import { TimeString } from "@routine-support/types";
import { indexOfTimeRange } from "@routine-support/utils";

import { ActivityCard } from "../ActivityCard";
import { getActivityColor } from "./utils";

interface ActivityGroupProps {
  timeRange: TimeString[];
  activities: Activity[];
  students: Student[];
  onActivityClick: (activity: Activity) => void;
}

export const ActivityGroup: React.FC<ActivityGroupProps> = ({
  timeRange,
  activities,
  students,
  onActivityClick,
}) => {
  return (
    <>
      {activities.map((activity, index) => (
        <ActivityCard
          backgroundColor={getActivityColor(activity, students)}
          index={index}
          count={activities.length}
          rowStart={indexOfTimeRange(timeRange, activity.start)}
          onClick={onActivityClick}
          activity={activity}
        />
      ))}
    </>
  );
};
