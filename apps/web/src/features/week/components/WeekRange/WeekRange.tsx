import React from "react";

import { Week } from "@routine-support/domains";
import { isBefore, isToday } from "date-fns";

import * as S from "./styled";

interface WeekRangeProps {
  week: Week | null;
}

export const WeekRange: React.FC<WeekRangeProps> = ({ week }) => {
  // const { i18n } = useTranslation();

  return (
    <S.Wrapper>
      {week?.weekInfo.days.map((day) => (
        <S.Day isToday={isToday(day)} isPassed={isBefore(day, new Date())}>
          {console.log(day)}
          {/* <S.DayNumber>{format(day, "D")}</S.DayNumber>
          <S.DayName>{format(day, "dddd")}</S.DayName> */}
        </S.Day>
      ))}
    </S.Wrapper>
  );
};
