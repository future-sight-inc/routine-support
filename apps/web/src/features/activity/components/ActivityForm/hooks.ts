import { Activity } from "features/activity/types";
import moment from "moment";
import { useForm } from "react-hook-form";

import { ActivityFormActions } from "./ActivityForm";

export const useActivityFormComponent = (
  activity: Partial<Activity> | null,
  actions: ActivityFormActions
) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      date: moment(),
      start: moment(),
      end: null,
      ...activity,
    },
  });

  const onSubmit = handleSubmit((values: Activity) => {
    actions.createActivity(values);
  });

  return {
    models: {
      control,
      minDate: moment(),
    },
    operations: { onSubmit },
  };
};
