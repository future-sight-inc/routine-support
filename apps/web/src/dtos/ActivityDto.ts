import { ActivityName } from "features/activity/types";
import { DateString, Id, ImageUrl, TimeString } from "types/main";

export interface ActivityDto {
  id?: Id;
  name: ActivityName;
  pictogram: ImageUrl;
  date: DateString;
  start: TimeString;
  end: TimeString;
}
