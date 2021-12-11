import { useState } from "react";

import { ActivityFilter } from "@routine-support/models";
import { useSavedActivityFilter } from "apps/web/src/hooks/useSavedActivityFilter";

import { ActivityFilterActions } from "./ActivityFilter";

export const useActivityFilterComponent = (actions: ActivityFilterActions) => {
  const savedActivityFilter = useSavedActivityFilter();
  const [activityFilter, setActivityFilter] = useState<ActivityFilter>(
    savedActivityFilter || {}
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    const newActivityFilter = activityFilter;

    newActivityFilter[event.target.name] = checked;

    localStorage.setItem("filter", JSON.stringify(newActivityFilter));
    setActivityFilter(newActivityFilter);

    actions.getWeek({ activityFilter, config: { silent: true } });
  };

  return { models: { activityFilter }, operations: { handleChange } };
};
