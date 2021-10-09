import { Moment } from "moment";

import { Activity } from "../activity/types";

export type Day = {
  date: Moment;
  activities: Activity[];
};
