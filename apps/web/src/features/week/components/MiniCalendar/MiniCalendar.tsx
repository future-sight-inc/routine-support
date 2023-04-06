import React, { useState } from "react";

import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import { addMonths, format, getISOWeek, getMonth, getYear } from "date-fns";
import { useTranslation } from "react-i18next";

import { createActiveWeekDataTestId, createWeekDataTestId, MiniCalendarLocators } from "./locators";
import * as S from "./styled";
import { getWeeksOfCalendar } from "./utils";

interface MiniCalendarProps {
  currentDate: Date;
  onWeekSelect: (week: Date) => void;
}

export const MiniCalendar: React.FC<MiniCalendarProps> = ({
  currentDate: defaultCurrentDate,
  onWeekSelect,
}) => {
  const { t } = useTranslation();

  const [currentDate, setCurrentDate] = useState(defaultCurrentDate);
  const [displayedMonth, setDisplayedMonth] = useState(defaultCurrentDate);
  const weeksOfCalendar = getWeeksOfCalendar(displayedMonth);

  const handleWeekSelect = (week: Date) => {
    setCurrentDate(week);
    onWeekSelect(week);
  };

  const handleMonthSelect = (month: Date) => {
    setDisplayedMonth(month);
  };

  const handlePrevMonthClick = () => {
    handleMonthSelect(addMonths(displayedMonth, -1));
  };

  const handleNextMonthClick = () => {
    handleMonthSelect(addMonths(displayedMonth, 1));
  };

  const handleTodayClick = () => {
    const today = new Date();

    handleWeekSelect(today);
    handleMonthSelect(today);
  };

  return (
    <S.Wrapper>
      <S.CurrentMonthRow>
        <S.CurrentMonth data-testid={MiniCalendarLocators.CurrentMonth}>
          {format(displayedMonth, "MMM yyyy")}
        </S.CurrentMonth>
        <S.Buttons>
          <S.ButtonWrapper
            onClick={handlePrevMonthClick}
            data-testid={MiniCalendarLocators.PreviousMonthButton}
          >
            <ChevronLeft />
          </S.ButtonWrapper>
          <S.ButtonWrapper
            onClick={handleNextMonthClick}
            data-testid={MiniCalendarLocators.NextMonthButton}
          >
            <ChevronRight />
          </S.ButtonWrapper>
        </S.Buttons>
      </S.CurrentMonthRow>
      <S.WeeksWrapper>
        <S.DayNames>
          {weeksOfCalendar[0].map((day, index) => (
            <S.Day key={index}>{format(day, "dd")}</S.Day>
          ))}
        </S.DayNames>
        {weeksOfCalendar.map((week, index) => (
          <S.Week
            isCurrent={
              getYear(week[0]) === getYear(currentDate) &&
              getISOWeek(week[0]) === getISOWeek(currentDate)
            }
            onClick={() => handleWeekSelect(week[0])}
            data-testid={
              getISOWeek(week[0]) === getISOWeek(currentDate)
                ? createActiveWeekDataTestId(getISOWeek(week[0]), getYear(week[0]))
                : createWeekDataTestId(getISOWeek(week[0]), getISOWeek(week[0]))
            }
            key={index}
          >
            {week.map((day, index) => (
              <S.Day
                isCurrentMonth={getMonth(displayedMonth) === getMonth(day)}
                key={index}
                data-testid={MiniCalendarLocators.Day}
              >
                {format(day, "d")}
              </S.Day>
            ))}
          </S.Week>
        ))}
      </S.WeeksWrapper>
      <S.TodayWrapper onClick={handleTodayClick} data-testid={MiniCalendarLocators.TodayButton}>
        <S.Today>{t("Today")}</S.Today>
      </S.TodayWrapper>
    </S.Wrapper>
  );
};
