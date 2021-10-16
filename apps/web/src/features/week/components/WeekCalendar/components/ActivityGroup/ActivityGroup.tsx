import React from "react";

import { Activity } from "features/activity/types";
import { Moment } from "moment";
import { TimeString } from "types/main";
import { indexOfTimeRange } from "utils/indexOfTimeRange";

import { ActivityCard } from "../ActivityCard";
import * as S from "./styled";

interface ActivityGroupProps {
  timeRange: TimeString[];
  rowStart: number;
  rowEnd: number;
  start: Moment;
  end: Moment;
  activities: Activity[];
  onActivityClick: (activity: Activity) => void;
}

export const ActivityGroup: React.FC<ActivityGroupProps> = ({
  timeRange,
  rowStart,
  rowEnd,
  activities,
  onActivityClick,
}) => {
  return (
    <S.Wrapper
      rowStart={rowStart}
      rowEnd={rowEnd}
      rowsCount={timeRange.length - 1}
    >
      {activities.map((activity) => (
        <ActivityCard
          rowStart={indexOfTimeRange(timeRange, activity.start) + 1}
          rowEnd={indexOfTimeRange(timeRange, activity.end) + 1}
          onClick={onActivityClick}
          activity={activity}
        />
      ))}
    </S.Wrapper>
  );
};
