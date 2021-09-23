import { ImageUrl, DateString, TimeString } from '../../types/main';

export type ActivityTitle = string;

export type Activity = {
  title: ActivityTitle;
  pictogram: ImageUrl;
  date: DateString;
  time: TimeString;
};
