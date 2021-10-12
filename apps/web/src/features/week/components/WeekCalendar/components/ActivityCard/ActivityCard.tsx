import React from "react";

import { Activity } from "features/activity/types";

import * as S from "./styled";

interface ActivityCardProps {
  activity: Activity;
  onClick: () => void;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({
  activity,
  onClick,
}) => {
  return <S.Wrapper onClick={onClick}>{activity.name}</S.Wrapper>;
};
