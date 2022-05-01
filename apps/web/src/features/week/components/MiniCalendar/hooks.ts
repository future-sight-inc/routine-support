import { getDateInfoFromMoment } from "@routine-support/domains";
import { Moment } from "moment";

import { MiniCalendarActions } from "./";

export const useMiniCalendarComponent = (actions: MiniCalendarActions) => {
  const handleWeekSelect = (week: Moment) => {
    actions.getWeek({
      params: getDateInfoFromMoment(week),
      config: { silent: true },
    });
  };

  return { operations: { handleWeekSelect } };
};
