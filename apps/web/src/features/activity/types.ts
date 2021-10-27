import { Moment } from "moment";
import { DateString, Id, ImageUrl, TimeString } from "../../types/main";

export type ActivityName = string;

export type ActivityDto = {
  _id?: Id;
  name: ActivityName;
  pictogram: ImageUrl;
  date: DateString;
  start: TimeString;
  end: TimeString;
};

export type Activity = {
  _id?: Id;
  name: ActivityName;
  pictogram: ImageUrl;
  date: Moment;
  start: Moment;
  end: Moment;
};
