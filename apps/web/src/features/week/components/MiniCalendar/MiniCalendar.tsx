import React, { useState } from "react";

import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import { getDateInfoFromMoment, getDaysOfWeek } from "@routine-support/domains";
import { Moment } from "moment";
import moment from "moment";
import { useTranslation } from "react-i18next";

import * as S from "./styled";

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
        <S.CurrentMonth>
          {displayedMonth.locale(i18n.language).format("MMM YYYY")}
        </S.CurrentMonth>
        <S.Buttons>
          <S.ButtonWrapper onClick={handlePrevMonthClick}>
            <ChevronLeft />
          </S.ButtonWrapper>
          <S.ButtonWrapper onClick={handleNextMonthClick}>
            <ChevronRight />
          </S.ButtonWrapper>
        </S.Buttons>
      </S.CurrentMonthRow>
      <S.WeeksWrapper>
        <S.DayNames>
          {weeksOfCalendar[0].map((day) => (
            <S.Day>{day.locale(i18n.language).format("dd")}</S.Day>
          ))}
        </S.DayNames>
        {weeksOfCalendar.map((week) => (
          <S.Week
            isCurrent={week[0].isoWeek() === currentDate.isoWeek()}
            onClick={() => handleWeekSelect(week[0])}
          >
            {week.map((day) => (
              <S.Day isCurrentMonth={displayedMonth.month() === day.month()}>
                {day.format("D")}
              </S.Day>
            ))}
          </S.Week>
        ))}
      </S.WeeksWrapper>
      <S.TodayWrapper onClick={handleTodayClick}>
        <S.Today>{t("Today")}</S.Today>
      </S.TodayWrapper>
    </S.Wrapper>
  );
};

const getWeeksOfCalendar = (currentDate: Moment) => {
  const start = currentDate.clone().startOf("month");
  const end = currentDate.clone().endOf("month");
  const weeks: Moment[][] = [];

  let isIncomplete = true;

  while (isIncomplete) {
    weeks.push(getDaysOfWeek(getDateInfoFromMoment(start)));
    start.add("weeks", 1);

    if (start.isSameOrAfter(end)) {
      isIncomplete = false;
    }
  }

  return weeks;
};
