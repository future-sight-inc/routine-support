import React, { useState } from "react";

import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import { Moment } from "moment";
import moment from "moment";
import { useTranslation } from "react-i18next";

import {
  createActiveWeekDataTestId,
  createWeekDataTestId,
  MiniCalendarLocators,
} from "./locators";
import * as S from "./styled";
import { getWeeksOfCalendar } from "./utils";

interface MiniCalendarProps {
  currentDate: Moment;
  onWeekSelect: (week: Moment) => void;
}

export const MiniCalendar: React.FC<MiniCalendarProps> = ({
  currentDate: defaultCurrentDate,
  onWeekSelect,
}) => {
  const { t, i18n } = useTranslation();

  const [currentDate, setCurrentDate] = useState(defaultCurrentDate);
  const [displayedMonth, setDisplayedMonth] = useState(defaultCurrentDate);
  const weeksOfCalendar = getWeeksOfCalendar(displayedMonth);

  const handleWeekSelect = (week: Moment) => {
    setCurrentDate(week);
    onWeekSelect(week);
  };

  const handleMonthSelect = (month: Moment) => {
    setDisplayedMonth(month);
  };

  const handlePrevMonthClick = () => {
    handleMonthSelect(displayedMonth.clone().add("months", -1));
  };

  const handleNextMonthClick = () => {
    handleMonthSelect(displayedMonth.clone().add("months", 1));
  };

  const handleTodayClick = () => {
    const today = moment();

    handleWeekSelect(today);
    handleMonthSelect(today);
  };

  return (
    <S.Wrapper>
      <S.CurrentMonthRow>
        <S.CurrentMonth data-testid={MiniCalendarLocators.CurrentMonth}>
          {displayedMonth.locale(i18n.language).format("MMM YYYY")}
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
            <S.Day key={index}>{day.locale(i18n.language).format("dd")}</S.Day>
          ))}
        </S.DayNames>
        {weeksOfCalendar.map((week, index) => (
          <S.Week
            isCurrent={
              week[0].year() === currentDate.year() &&
              week[0].isoWeek() === currentDate.isoWeek()
            }
            onClick={() => handleWeekSelect(week[0])}
            data-testid={
              week[0].isoWeek() === currentDate.isoWeek()
                ? createActiveWeekDataTestId(week[0].isoWeek(), week[0].year())
                : createWeekDataTestId(week[0].isoWeek(), week[0].year())
            }
            key={index}
          >
            {week.map((day, index) => (
              <S.Day
                isCurrentMonth={displayedMonth.month() === day.month()}
                key={index}
                data-testid={MiniCalendarLocators.Day}
              >
                {day.format("D")}
              </S.Day>
            ))}
          </S.Week>
        ))}
      </S.WeeksWrapper>
      <S.TodayWrapper
        onClick={handleTodayClick}
        data-testid={MiniCalendarLocators.TodayButton}
      >
        <S.Today>{t("Today")}</S.Today>
      </S.TodayWrapper>
    </S.Wrapper>
  );
};
