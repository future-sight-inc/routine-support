import { DateString } from '../types/main';
import { Activity } from './activity';

export type DayActivities = (Activity | null)[];
export type Day = {
  date: DateString;
  activities: DayActivities;
};
