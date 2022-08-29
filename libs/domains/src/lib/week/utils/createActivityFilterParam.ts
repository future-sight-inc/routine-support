import { ActivityFilter } from "../types";

export const createActivityFilterParam = (filter: ActivityFilter): string | undefined => {
  if (filter.length) {
    return filter.join(",");
  }

  return undefined;
};
