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
          <S.DayName>{day.format("dd")},</S.DayName>
          {/* todo add locale from localStorage */}
          <S.Date>{day.locale(i18n.language).format("DD MMM")}</S.Date>
        </S.Day>
      ))}
    </S.Wrapper>
  );
};
