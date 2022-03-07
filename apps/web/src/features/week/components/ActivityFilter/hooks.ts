import { useEffect, useState } from "react";

import { ActivityFilter, Student } from "@routine-support/domains";
import { ActivityFilterService } from "apps/web/src/services/ActivityFilterService";

import { ActivityFilterActions } from "./ActivityFilter";

export const useActivityFilterComponent = (
  students: Student[],
  actions: ActivityFilterActions
) => {
  const savedActivityFilter = ActivityFilterService.getFilter();
  const [activityFilter, setActivityFilter] = useState<ActivityFilter>(
    savedActivityFilter || {}
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    const newActivityFilter = activityFilter;

    newActivityFilter[event.target.name] = checked;

    ActivityFilterService.setFilter(newActivityFilter);
    setActivityFilter(newActivityFilter);

    actions.getWeek({
      activityFilter: newActivityFilter,
      config: { silent: true },
    });
  };

  useEffect(() => {
    if (!savedActivityFilter) {
      let ids = ["common"];

      if (students.length) {
        ids = ids.concat(students.map((student) => student._id as string));
      }

      const defaultFilter: ActivityFilter = {};

      ids.forEach((id) => (defaultFilter[id] = true));

      ActivityFilterService.setFilter(defaultFilter);
      setActivityFilter(defaultFilter);
    }
  }, [savedActivityFilter, students]);

  return { models: { activityFilter }, operations: { handleChange } };
};
