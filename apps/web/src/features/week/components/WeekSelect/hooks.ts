import {
  DateInfo,
  dateInfoToMoment,
  getCurrentDateInfo,
  getDateInfoFromMoment,
} from "@routine-support/domains";
import { useDateInfoQuery } from "apps/web/src/hooks/useDateInfoQuery";
import { Moment } from "moment";
import { useForm } from "react-hook-form";

import { addWeekToMoment, removeWeekFromMoment } from "./utils";
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

  const onSubmit = handleSubmit(({ year, week }: DateInfo) => {
    actions.getWeek({ params: { year, week }, config: { silent: true } });
  });

  const onPrevClick = (values: DateInfo) => {
    const newDate = removeWeekFromMoment(dateInfoToMoment(values));

    updateCurrentDateInfo(newDate);
    onSubmit();
  };

  const onNextClick = (values: DateInfo) => {
    const newDate = addWeekToMoment(dateInfoToMoment(values));

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
