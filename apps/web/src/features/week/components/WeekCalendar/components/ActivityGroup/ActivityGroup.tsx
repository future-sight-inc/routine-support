import React from "react";

import { Activity } from "features/activity/types";
import { TimeString } from "types/main";
import { indexOfTimeRange } from "utils/indexOfTimeRange";

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
