import { Moment } from "moment";

import { MiniCalendarActions } from "./";

export const useMiniCalendarComponent = (actions: MiniCalendarActions) => {
  const handleWeekSelect = (date: Moment) => {
    actions.getWeek({ date });
  };

  return { operations: { handleWeekSelect } };
};
