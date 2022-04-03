import { ActivitiesGroup } from "@routine-support/domains";
import moment from "moment";

export const createMockActivitiesGroup = (): ActivitiesGroup => {
  return {
    start: moment(),
    end: moment(),
    activities: [],
  };
};
