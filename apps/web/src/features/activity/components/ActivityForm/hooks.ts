import { useState } from "react";

import { Activity, User } from "@routine-support/domains";
import moment from "moment";
import { useForm } from "react-hook-form";

import { ActivityFormActions } from "./ActivityForm";

export const useActivityFormComponent = (
  user: User,
  activity: Partial<Activity> | null,
  actions: ActivityFormActions
) => {
  const defaultValues = {
    date: moment(),
    start: moment(),
    ...activity,
  };
  const { control, handleSubmit, formState, getValues } = useForm<Activity>({
    defaultValues,
  });

  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = handleSubmit(async (values) => {
    try {
      setSubmitError(null);

      if (values._id) {
        await actions.updateActivity({
          ...values,
          coachId: user._id,
        } as Activity);
      } else {
        await actions.createActivity({
          ...values,
          coachId: user._id,
        } as Activity);
      }

      actions.getWeek({ config: { silent: true } });
    } catch (error) {
      setSubmitError(error.message);
    }
  });

  const onDelete = async () => {
    const id = getValues()._id;

    if (window.confirm("Confirm your action") && id) {
      await actions.deleteActivity(id);

      actions.getWeek({ config: { silent: true } });
    }
  };

  return {
    models: {
      control,
      isDirty: formState.isDirty,
      isSubmitting: formState.isSubmitting,
      submitError,
    },
    operations: { handleSubmit: onSubmit, onDelete },
  };
};
