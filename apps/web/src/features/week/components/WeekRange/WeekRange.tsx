import React from "react";

import { Week } from "@routine-support/domains";
import { isToday } from "@routine-support/utils";

import * as S from "./styled";

interface WeekRangeProps {
  week: Week | null;
}

export const WeekRange: React.FC<WeekRangeProps> = ({ week }) => {
  return (
    <S.Wrapper>
      {week?.weekInfo.days.map((day) => (
        <S.Day today={isToday(day)}>
          <S.DayName>{day.format("dd")},</S.DayName>
          <S.Date>{day.locale("ru").format("DD MMM")}</S.Date>
        </S.Day>
      ))}
    </S.Wrapper>
  );
};
