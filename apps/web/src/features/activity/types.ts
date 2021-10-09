import { Moment } from "moment";

import { ImageUrl, Id } from "../../types/main";

export type ActivityName = string;

export type Activity = {
  id?: Id;
  name: ActivityName;
  pictogram: ImageUrl;
  date: Moment;
  start: Moment;
  end: Moment;
};
