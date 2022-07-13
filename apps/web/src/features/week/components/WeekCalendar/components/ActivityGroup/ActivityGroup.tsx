import React from "react";

import { Activity, Student } from "@routine-support/domains";
import { TimeString } from "@routine-support/types";
import { getActivityColor } from "@routine-support/ui-theme";
import { indexOfTimeRange } from "@routine-support/utils";

import { ActivityCard } from "./components/ActivityCard";
import { ConfirmationStatus } from "./components/ConfirmationStatus";

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
          confirmationStatus={
            <ConfirmationStatus students={students} activity={activity} />
          }
        />
      ))}
    </>
  );
};
