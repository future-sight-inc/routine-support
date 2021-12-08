import React from "react";

import { Activity } from "@routine-support/models";
import { TimeString } from "@routine-support/types";
import { indexOfTimeRange } from "@routine-support/utils";

import { ActivityCard } from "../ActivityCard";

interface ActivityGroupProps {
  timeRange: TimeString[];
  activities: Activity[];
  onActivityClick: (activity: Activity) => void;
}

export const ActivityGroup: React.FC<ActivityGroupProps> = ({
  timeRange,
  activities,
  onActivityClick,
}) => {
  return (
    <>
      {activities.map((activity, index) => (
        <ActivityCard
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
