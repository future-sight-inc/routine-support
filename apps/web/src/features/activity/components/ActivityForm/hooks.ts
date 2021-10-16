import { Activity } from "features/activity/types";
import moment from "moment";
import { useForm } from "react-hook-form";

import { ActivityFormActions } from "./ActivityForm";

export const useActivityFormComponent = (
  activity: Partial<Activity> | null,
  actions: ActivityFormActions
) => {
  const { control, handleSubmit, formState, getValues, watch } = useForm({
    defaultValues: {
      date: moment(),
      start: moment(),
      end: null,
      ...activity,
    },
  });

  const onSubmit = handleSubmit(async (values: Activity) => {
    if (values._id) {
      await actions.updateActivity(values);
    } else {
      await actions.createActivity(values);
    }

    actions.getWeek();
  });

  const onDelete = async () => {
    const id = getValues()._id;
    if (window.confirm("Confirm your action") && id) {
      await actions.deleteActivity(id);

      actions.getWeek();
    }
  };

  return {
    models: {
      control,
      minDate: moment(),
      minTime: moment(),
      isDirty: formState.isDirty,
    },
    operations: { onSubmit, onDelete },
  };
};
