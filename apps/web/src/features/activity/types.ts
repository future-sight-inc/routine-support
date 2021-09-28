import { ImageUrl, DateString, TimeString, Id } from "../../types/main";

export type ActivityTitle = string;

export type Activity = {
  id?: Id;
  title: ActivityTitle;
  pictogram: ImageUrl;
  date: DateString;
  time: TimeString;
};
