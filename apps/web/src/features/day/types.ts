import { Activity } from "features/activity/types";
import { Moment } from "moment";

export type Day = {
  date: Moment;
  activities: Activity[];
};
