import React from "react";

import { Week } from "@routine-support/domains";
import { isToday } from "@routine-support/utils";
import moment from "moment";
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
        <S.Day isToday={isToday(day)} isPassed={day.isBefore(moment())}>
          <S.DayNumber>{day.locale(i18n.language).format("D")}</S.DayNumber>
          <S.DayName>{day.format("dddd")}</S.DayName>
        </S.Day>
      ))}
    </S.Wrapper>
  );
};
