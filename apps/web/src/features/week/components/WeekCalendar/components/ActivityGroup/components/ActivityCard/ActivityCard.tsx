import React, { ReactNode } from "react";

import { Activity } from "@routine-support/domains";
import { getTimeInHours, stringifyTime } from "@routine-support/utils";
import { getMinutes } from "date-fns";

import * as S from "./styled";

export interface ActivityCardProps {
  rowStart: number;
  activity: Activity;
  index: number;
  count: number;
  backgroundColor: string;
  confirmationStatus: ReactNode;
  onClick: (activity: Activity) => void;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({
  rowStart,
  activity,
  index,
  count,
  backgroundColor,
  confirmationStatus,
  onClick,
}) => {
  return (
    <S.Wrapper
      backgroundColor={backgroundColor}
      rowStart={rowStart}
      marginTop={getMinutes(activity.start) / 60}
      height={getTimeInHours(activity.end) - getTimeInHours(activity.start)}
      index={index}
      count={count}
      onClick={() => onClick(activity)}
    >
      <S.Name>{activity.name}</S.Name>
      <S.Time>
        {stringifyTime(activity.start)} - {stringifyTime(activity.end)}
      </S.Time>
      {confirmationStatus}
    </S.Wrapper>
  );
};
