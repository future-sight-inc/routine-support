import { DateInfo } from "features/week/types";
import { useDateInfoQuery } from "hooks/useDateInfoQuery";
import { Moment } from "moment";
import { useForm } from "react-hook-form";
import { getCurrentDateInfo } from "utils/getCurrentDateInfo";
import { getDateInfoFromMoment } from "utils/getDateInfoFromMoment";

import { FieldValues } from "./types";
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

  const onSubmit = handleSubmit((values: FieldValues) => {
    actions.getWeek(values.year, values.week, true);
  });

  const onPrevClick = (values: FieldValues) => {
    const newDate = addWeeks(values, -1);
    updateCurrentDateInfo(newDate);
    onSubmit();
  };

  const onNextClick = (values: FieldValues) => {
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
