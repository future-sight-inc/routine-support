import { ActivityFilter } from "@routine-support/domains";

export const useSavedActivityFilter = (): ActivityFilter | undefined => {
  const savedFilter = localStorage.getItem("filter");

  if (savedFilter) {
    return JSON.parse(savedFilter);
  }


  return undefined;
};
