import moment from "moment";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { defaultValues } from "./constants";
import { FieldValues } from "./types";
import { addWeeks } from "./utils";
import { WeekSelectActions } from "./WeekSelect";

export const useWeekSelectComponent = (actions: WeekSelectActions) => {
  const { handleSubmit, register, setValue } = useForm<FieldValues>({
    defaultValues,
  });

  useEffect(() => {
    actions.getWeek(defaultValues.year, defaultValues.week);
  }, []);

  const updateFormByMoment = (moment: moment.Moment) => {
    setValue("year", Number(moment.get("year")));
    setValue("week", Number(moment.get("week")));
  };

  const onSubmit = handleSubmit((values: FieldValues) => {
    actions.getWeek(values.year, values.week);
  });

  const onPrevClick = (values: FieldValues) => {
    const newDate = addWeeks(values, -1);
    updateFormByMoment(newDate);
    onSubmit();
  };

  const onNextClick = (values: FieldValues) => {
    const newDate = addWeeks(values, 1);
    updateFormByMoment(newDate);
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
