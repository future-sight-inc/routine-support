import { MiniCalendarActions } from "./";

export const useMiniCalendarComponent = (actions: MiniCalendarActions) => {
  const handleWeekSelect = (date: Date) => {
    actions.getWeek({ date });
  };

  return { operations: { handleWeekSelect } };
};
