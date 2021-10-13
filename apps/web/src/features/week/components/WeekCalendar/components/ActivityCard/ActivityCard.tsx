import React from "react";

import { Activity } from "features/activity/types";
import { stringifyTime } from "utils/stringifyTime";

import * as S from "./styled";

interface ActivityCardProps {
  rowStart: number;
  rowEnd: number;
  activity: Activity;
  onClick: () => void;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({
  rowStart,
  rowEnd,
  activity,
  onClick,
}) => {
  return (
    <S.Wrapper
      rowStart={rowStart}
      rowEnd={rowEnd}
      // marginTop={
      //   (activity.start.get("minutes") / ((rowEnd - rowStart || 1) * 60)) * 100
      // }
      // height={
      //   (((getMinutes(activity.end) - getMinutes(activity.start)) / 60) * 100) /
      //   (rowEnd - rowStart || 1)
      // }
      onClick={onClick}
    >
      <S.Time>
        {stringifyTime(activity.start)} - {stringifyTime(activity.end)}
      </S.Time>
      <S.Name>{activity.name}</S.Name>
    </S.Wrapper>
  );
};
