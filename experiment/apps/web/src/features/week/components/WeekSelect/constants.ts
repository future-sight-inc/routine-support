import moment from 'moment';

export const defaultValues = {
  year: Number(moment().get('year')),
  week: Number(moment().get('week')),
};
