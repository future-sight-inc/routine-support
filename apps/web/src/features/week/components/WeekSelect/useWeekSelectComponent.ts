import { useAppDispatch } from 'app/hooks';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { defaultValues } from './constants';
import { FieldValues } from './types';
import { addWeeks, getDateRange } from './utils';
import { WeekSelectActions } from './WeekSelect';

export const useWeekSelectComponent = (actions: WeekSelectActions) => {
  const [dateRange, setDateRange] = useState(getDateRange(defaultValues));
  const { handleSubmit, register, setValue } = useForm<FieldValues>({
    defaultValues,
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    actions.getWeek(defaultValues.year, defaultValues.week);
  }, []);

  const updateFormByMoment = (moment: moment.Moment) => {
    setValue('year', Number(moment.get('year')));
    setValue('week', Number(moment.get('week')));
  };

  const onSubmit = handleSubmit((values: FieldValues) => {
    setDateRange(getDateRange(values));
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
    models: {
      dateRange,
    },
    operations: {
      register,
      handleSubmit: onSubmit,
      handlePrevClick: handleSubmit(onPrevClick),
      handleNextClick: handleSubmit(onNextClick),
    },
  };
};
