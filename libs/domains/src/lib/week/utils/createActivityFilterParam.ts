import { ActivityFilter } from "../types";

export const createActivityFilterParam = (filter?: ActivityFilter): string | undefined => {
  const isFilterTruthy =
    filter && Object.keys(filter).length && Object.values(filter).includes(true);
  const filterParam: string[] = [];

  if (isFilterTruthy) {
    for (const key in filter) {
      if (filter[key]) {
        filterParam.push(key);
      }
    }

    return filterParam.join(",");
  }

  return undefined;
};
