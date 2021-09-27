import moment from 'moment';
import { formatDate } from 'utils/formatDate';
import { FieldValues } from './types';

export const addWeeks = (values: FieldValues, amount: number) => {
  const newDate = moment()
    .year(values.year)
    .weeks(values.week)
    .add(amount, 'w');

  return newDate;
};

export const getDateRange = (values: FieldValues) => {
  const date = moment().locale('ru').year(values.year).weeks(values.week);

  return {
    start: formatDate(date.startOf('w')),
    end: formatDate(date.endOf('w')),
  };
};
