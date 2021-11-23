import { Moment } from "moment";
import { Id, ImageUrl, TimeString, DateString } from "@routine-support/types";

export type ActivityName = string;

export type Activity = {
  _id?: Id;
  coachId: Id;
  name: ActivityName;
  pictogram: ImageUrl;
  date: Moment;
  start: Moment;
  end: Moment;
};

export type ActivityDto = {
  _id?: Id;
  coachId: Id;
  name: ActivityName;
  pictogram: ImageUrl;
  date: DateString;
  start: TimeString;
  end: TimeString;
};
