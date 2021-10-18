import React from "react";

import { Activity } from "features/activity/types";
import { getMinutes } from "utils/getMinutes";
import { stringifyTime } from "utils/stringifyTime";

import * as S from "./styled";

interface ActivityCardProps {
  rowStart: number;
  activity: Activity;
  index: number;
  count: number;
  onClick: (activity: Activity) => void;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({
  rowStart,
  activity,
  index,
  count,
  onClick,
}) => {
  return (
    <S.Wrapper
      rowStart={rowStart}
      marginTop={activity.start.get("minutes") / 60}
      height={(getMinutes(activity.end) - getMinutes(activity.start)) / 60}
      index={index}
      count={count}
      onClick={() => onClick(activity)}
    >
      <S.Time>
        {stringifyTime(activity.start)} - {stringifyTime(activity.end)}
      </S.Time>
      <S.Name>{activity.name}</S.Name>
    </S.Wrapper>
  );
};
