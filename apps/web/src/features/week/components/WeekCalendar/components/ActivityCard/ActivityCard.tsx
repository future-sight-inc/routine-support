import React from "react";

import { Activity } from "@routine-support/domains";
import { getMinutes, stringifyTime } from "@routine-support/utils";

import * as S from "./styled";

interface ActivityCardProps {
  rowStart: number;
  activity: Activity;
  index: number;
  count: number;
  onClick: (activity: Activity) => void;
  backgroundColor: string;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({
  rowStart,
  activity,
  index,
  count,
  backgroundColor,
  onClick,
}) => {
  return (
    <S.Wrapper
      backgroundColor={backgroundColor}
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
