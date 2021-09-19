import { TimeString, ImageUrl, DateString } from '../types/main';

export type ActivityName = string;
export type Activity = {
  name: ActivityName;
  time: TimeString;
  pictogram: ImageUrl;
  date: DateString;
};
