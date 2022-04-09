import React from "react";

import { DateInfo, getDateInfoFromMoment } from "@routine-support/domains";
import { Moment } from "moment";

import { MiniCalendar as UncontrolledMiniCalendar } from "./MiniCalendar";

interface MiniCalendarActions {
  getWeek: (data: { params: DateInfo; config: { silent: true } }) => void;
}

interface MiniCalendarProps {
  currentDate: Moment;
  actions: MiniCalendarActions;
}

export const MiniCalendar: React.FC<MiniCalendarProps> = ({
  currentDate,
  actions,
}) => {
  const handleWeekSelect = (week: Moment) => {
    actions.getWeek({
      params: getDateInfoFromMoment(week),
      config: { silent: true },
    });
  };

  return (
    <UncontrolledMiniCalendar
      currentDate={currentDate}
      onWeekSelect={handleWeekSelect}
    />
  );
};
