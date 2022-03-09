import { ActivityFilterQuery } from "@routine-support/domains";

export const parseActivitiesFilter = (filter = ""): ActivityFilterQuery => {
  return filter?.split(",");
};
