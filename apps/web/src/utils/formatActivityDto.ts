import { ActivityDto } from "dtos/ActivityDto";
import { Activity } from "features/activity/types";
import moment from "moment";

export const formatActivityDto = (activityDto: ActivityDto): Activity => {
  return {
    ...activityDto,
    date: moment(),
    start: moment(),
    end: moment(),
  };
};
