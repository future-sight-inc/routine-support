import { DateString } from '../../types/main';
import { Activity } from '../activity/types';

export type Day = {
  date: DateString;
  activities: Activity[];
};
