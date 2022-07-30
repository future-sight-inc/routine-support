import { useState } from "react";

import { ActivityFilter, Student } from "@routine-support/domains";
import { ActivityFilterService } from "apps/web/src/services/ActivityFilterService";

import { ActivityFilterActions } from "./ActivityFilter";

export const useActivityFilterComponent = (students: Student[], actions: ActivityFilterActions) => {
  const createInitialFilter = () => {
    const defaultFilter: ActivityFilter = ActivityFilterService.getFilter();

    if (Object.keys(defaultFilter).length) {
      return defaultFilter;
    }

    let ids = ["common"];

    if (students.length) {
      ids = ids.concat(students.map((student) => student._id));
    }

    ids.forEach((id) => {
      defaultFilter[id] = true;
    });

    ActivityFilterService.setFilter(defaultFilter);

    return defaultFilter;
  };

  const [activityFilter, setActivityFilter] = useState<ActivityFilter>(createInitialFilter());

  const handleChange = (name: string, value: boolean) => {
    const newActivityFilter = activityFilter;

    newActivityFilter[name] = value;

    value ? ActivityFilterService.addProperty(name) : ActivityFilterService.removeProperty(name);

    setActivityFilter(ActivityFilterService.getFilter());

    actions.getWeek({
      activityFilter: newActivityFilter,
      config: { silent: true },
    });
  };

  return { models: { activityFilter }, operations: { handleChange } };
};
