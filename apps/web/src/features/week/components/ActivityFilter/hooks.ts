import { useEffect, useState } from "react";

import { useSavedActivityFilter } from "apps/web/src/hooks/useSavedActivityFilter";
import { useForm } from "react-hook-form";

import { ActivityFilterActions } from "./ActivityFilter";

export const useActivityFilterComponent = (actions: ActivityFilterActions) => {
  const { control, setValue, watch } = useForm();
  const savedActivityFilter = useSavedActivityFilter();
  const [activityFilter, setActivityFilter] = useState(savedActivityFilter);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      localStorage.setItem("filter", JSON.stringify(value));

      if (JSON.stringify(value) !== JSON.stringify(activityFilter)) {
        console.log("updated");
        setActivityFilter(value);
      }
    });

    return () => subscription.unsubscribe();
  }, [activityFilter]);

  useEffect(() => {
    if (savedActivityFilter) {
      for (const key in savedActivityFilter) {
        setValue(key, savedActivityFilter[key]);
      }
    }
  }, [savedActivityFilter]);

  useEffect(() => {
    if (activityFilter) {
      actions.getWeek(undefined, { silent: true });
    }
  }, [activityFilter]);

  return { operations: { control } };
};
