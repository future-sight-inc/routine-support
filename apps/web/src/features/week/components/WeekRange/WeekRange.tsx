import { Week } from "features/week/types";
import React from "react";
import * as S from "./styled";
import moment from "moment";
import { formatDate } from "utils/formatDate";
import { isDateStringToday } from "utils/isDateStringToday";

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
