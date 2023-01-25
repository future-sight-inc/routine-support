import { useState } from "react";

import { ActivityFilter, Student } from "@routine-support/domains";
import { ActivityFilterService } from "apps/web/src/services/ActivityFilterService";

import { ActivityFilterActions } from "./ActivityFilter";

export const useActivityFilterComponent = (students: Student[], actions: ActivityFilterActions) => {
  const createInitialFilter = () => {
    const defaultFilter: ActivityFilter = ActivityFilterService.getFilter();

    if (defaultFilter.length) {
      return defaultFilter;
    }

    let initialFilter = ["common"];

    if (students.length) {
      const studentIds = students.map((student) => student._id);

      initialFilter = initialFilter.concat(studentIds);
    }

    ActivityFilterService.setFilter(initialFilter.concat(defaultFilter));

    return defaultFilter;
  };

  const [activityFilter, setActivityFilter] = useState<ActivityFilter>(createInitialFilter());

  const handleChange = (name: string, value: boolean) => {
    value ? ActivityFilterService.addProperty(name) : ActivityFilterService.removeProperty(name);

    const newActivityFilter = ActivityFilterService.getFilter();

    setActivityFilter(newActivityFilter);
    actions.getWeek({ activityFilter: newActivityFilter });
  };

  return { models: { activityFilter }, operations: { handleChange } };
};
