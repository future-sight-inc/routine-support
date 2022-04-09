import React from "react";

import { Week } from "@routine-support/domains";
import { isToday } from "@routine-support/utils";
import { useTranslation } from "react-i18next";

import * as S from "./styled";

interface WeekRangeProps {
  week: Week | null;
}

export const WeekRange: React.FC<WeekRangeProps> = ({ week }) => {
  const { i18n } = useTranslation();

  return (
    <S.Wrapper>
      {week?.weekInfo.days.map((day) => (
        <S.Day today={isToday(day)}>
          <S.DayName>
            {day.locale(i18n.language).format("D")} {day.format("dddd")}
          </S.DayName>
        </S.Day>
      ))}
    </S.Wrapper>
  );
};
