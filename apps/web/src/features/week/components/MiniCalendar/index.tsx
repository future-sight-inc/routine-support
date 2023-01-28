import React from "react";


import { useMiniCalendarComponent } from "./hooks";
import { MiniCalendar as UncontrolledMiniCalendar } from "./MiniCalendar";

export interface MiniCalendarActions {
  getWeek: (data?: { date?: Date }) => void;
}

interface MiniCalendarProps {
  currentDate: Date;
  actions: MiniCalendarActions;
}

export const MiniCalendar: React.FC<MiniCalendarProps> = ({ currentDate, actions }) => {
  const {
    operations: { handleWeekSelect },
  } = useMiniCalendarComponent(actions);

  return <UncontrolledMiniCalendar currentDate={currentDate} onWeekSelect={handleWeekSelect} />;
};
