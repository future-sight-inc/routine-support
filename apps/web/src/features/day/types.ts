import { DateString, TimeString } from "../../types/main";
import { Activity } from "../activity/types";

export type Day = {
  date: DateString;
  activities: { [time in TimeString]: Activity };
};
