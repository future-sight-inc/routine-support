import { ActivityFilter } from "@routine-support/domains";

export const getSavedActivityFilter = (): ActivityFilter => {
  const savedFilter = localStorage.getItem("filter");

  if (savedFilter) {
    return JSON.parse(savedFilter);
  }

  return [];
};
