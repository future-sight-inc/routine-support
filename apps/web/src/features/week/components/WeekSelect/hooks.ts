import {
  DateInfo,
  getCurrentDateInfo,
  getDateInfoFromMoment,
} from "@routine-support/models";
import { useDateInfoQuery } from "apps/web/src/hooks/useDateInfoQuery";

import { Moment } from "moment";
import { useForm } from "react-hook-form";

import { addWeeks } from "./utils";
import { WeekSelectActions } from "./WeekSelect";

export const useWeekSelectComponent = (actions: WeekSelectActions) => {
  const dateInfoQuery = useDateInfoQuery();
  const currentDateInfo = getCurrentDateInfo();

  const { handleSubmit, register, setValue } = useForm<DateInfo>({
    defaultValues: dateInfoQuery || currentDateInfo,
  });

  const updateCurrentDateInfo = (moment: Moment) => {
    const dateInfo = getDateInfoFromMoment(moment);

    setValue("year", dateInfo.year);
    setValue("week", dateInfo.week);
  };

  const onSubmit = handleSubmit((values: DateInfo) => {
    actions.getWeek(values.year, values.week, true);
  });

  const onPrevClick = (values: DateInfo) => {
    const newDate = addWeeks(values, -1);
    updateCurrentDateInfo(newDate);
    onSubmit();
  };

  const onNextClick = (values: DateInfo) => {
    const newDate = addWeeks(values, 1);
    updateCurrentDateInfo(newDate);
    onSubmit();
  };

  return {
    models: {},
    operations: {
      register,
      handlePrevClick: handleSubmit(onPrevClick),
      handleNextClick: handleSubmit(onNextClick),
    },
  };
};
