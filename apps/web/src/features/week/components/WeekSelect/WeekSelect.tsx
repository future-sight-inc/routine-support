import React from "react";

import { YearNumber, WeekNumber } from "@routine-support/domains";

import { useWeekSelectComponent } from "./hooks";
import * as S from "./styled";

export interface WeekSelectActions {
  getWeek: (data: {
    params: { year: YearNumber; week: WeekNumber };
    config: { silent: boolean };
  }) => void;
}

export interface WeekSelectProps {
  loading: boolean;
  actions: WeekSelectActions;
}

export const WeekSelect: React.FC<WeekSelectProps> = ({ actions, loading }) => {
  const { operations } = useWeekSelectComponent(actions);

  return (
    <S.Wrapper>
      <S.SelectButton
        type="button"
        onClick={operations.handlePrevClick}
        disabled={loading}
      >
        <S.ArrowLeft />
      </S.SelectButton>
      <S.SelectButton
        type="button"
        onClick={operations.handleNextClick}
        disabled={loading}
      >
        <S.ArrowRight />
      </S.SelectButton>
    </S.Wrapper>
  );
};
