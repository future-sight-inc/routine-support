import React from "react";

import { Week } from "features/week/types";
import { isDateStringToday } from "utils/isDateStringToday";

import * as S from "./styled";

interface WeekRangeProps {
  week: Week | null;
}

export const WeekRange: React.FC<WeekRangeProps> = ({ week }) => {
  return (
    <S.Wrapper>
      {week?.days.map((day) => (
        <S.Day today={isDateStringToday(day.date)}>
          <S.Date>{day.date}</S.Date>
        </S.Day>
      ))}
    </S.Wrapper>
  );
};
