import { ActivitiesGroup } from "@routine-support/domains";

export const createMockActivitiesGroup = (): ActivitiesGroup => {
  return {
    start: new Date(),
    end: new Date(),
    activities: [],
  };
};
