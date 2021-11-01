import { Moment } from "moment";
import { Id, ImageUrl, TimeString, DateString } from "@routine-support/types";

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
