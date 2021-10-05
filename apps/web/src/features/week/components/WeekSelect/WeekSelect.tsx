import Button from "@mui/material/Button";
import { YearNumber, WeekNumber } from "features/week/types";
import React from "react";
import * as S from "./styled";
import { useWeekSelectComponent } from "./hooks";

export interface WeekSelectActions {
  getWeek: (year: YearNumber, week: WeekNumber) => void;
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
        Prev
      </S.SelectButton>
      <S.SelectButton
        type="button"
        onClick={operations.handleNextClick}
        disabled={loading}
      >
        Next
      </S.SelectButton>
    </S.Wrapper>
  );
};
