import { ActivityFilter } from "@routine-support/domains";
import { Id } from "@routine-support/types";

export const ActivityFilterService = {
  getFilter: () => {
    const savedActivityFilter = localStorage.getItem("filter");

    if (savedActivityFilter) {
      return JSON.parse(savedActivityFilter);
    }

    return {};
  },
  setFilter: (newActivityFilter: ActivityFilter) => {
    localStorage.setItem("filter", JSON.stringify(newActivityFilter));
  },
  clearFilter: () => {
    localStorage.removeItem("filter");
  },
  addProperty: (id: Id) => {
    const savedActivityFilter = ActivityFilterService.getFilter();

    if (savedActivityFilter) {
      savedActivityFilter[id] = true;

      ActivityFilterService.setFilter(savedActivityFilter);
    }
  },
  removeProperty: (id: Id) => {
    const savedActivityFilter = ActivityFilterService.getFilter();

    if (savedActivityFilter) {
      delete savedActivityFilter[id];

      ActivityFilterService.setFilter(savedActivityFilter);
    }
  },
};
