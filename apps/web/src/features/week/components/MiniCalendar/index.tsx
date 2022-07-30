import React from "react";

import { DateInfo } from "@routine-support/domains";
import { Moment } from "moment";

import { useMiniCalendarComponent } from "./hooks";
import { MiniCalendar as UncontrolledMiniCalendar } from "./MiniCalendar";

export interface MiniCalendarActions {
  getWeek: (data: { params: DateInfo; config: { silent: true } }) => void;
}

interface MiniCalendarProps {
  currentDate: Moment;
  actions: MiniCalendarActions;
}

export const MiniCalendar: React.FC<MiniCalendarProps> = ({ currentDate, actions }) => {
  const {
    operations: { handleWeekSelect },
  } = useMiniCalendarComponent(actions);

  return <UncontrolledMiniCalendar currentDate={currentDate} onWeekSelect={handleWeekSelect} />;
};
