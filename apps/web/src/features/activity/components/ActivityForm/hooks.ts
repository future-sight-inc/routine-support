import { useEffect, useState } from "react";

import { Activity, Coach, RepeatTypeEnum } from "@routine-support/domains";
import { SubmitErrorData } from "@routine-support/types";
import { useConfirm } from "apps/web/src/services/ConfirmationService";
import { setFormErrors } from "apps/web/src/utils/setFormErrors";
import { AxiosError } from "axios";
import { t } from "i18next";
import moment from "moment";
import { useForm } from "react-hook-form";

import { ActivityFormActions } from "./ActivityForm";

export const useActivityFormComponent = (
  coach: Coach,
  activity: Partial<Activity> | undefined,
  actions: ActivityFormActions
) => {
  const defaultValues = {
    date: moment(),
    start: moment(),
    end: moment().add("hours", 1),
    isCommon: true,
    isImportant: false,
    ...activity,
  };
  const { control, handleSubmit, formState, getValues, setValue, setError, watch } = useForm({
    defaultValues,
  });

  const [submitError, setSubmitError] = useState<string | undefined>();

  const [shouldShowStudents, setShouldShowStudent] = useState(!defaultValues.isCommon);
  const [isRepeatTypeAvailable, setRepeatTypeAvailable] = useState(!defaultValues.isImportant);

  const { confirm } = useConfirm();

  useEffect(() => {
    // ! баг в react-hook-form
    const subscription = (watch as any)((value, { name }) => {
      if (name === "isCommon") {
        setShouldShowStudent(!value.isCommon);
        // ! баг в react-hook-form
        (setError as any)("students", null);

        if (value.isCommon) {
          // ! баг в react-hook-form
          (setValue as any)("students", []);
        }
      }

      if (name === "isImportant") {
        if (value.isImportant) {
          setRepeatTypeAvailable(false);
          // ! баг в react-hook-form
          (setValue as any)("repeatType", RepeatTypeEnum.None);
        } else {
          setRepeatTypeAvailable(true);
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = handleSubmit(async (values) => {
    try {
      setSubmitError(undefined);

      if (values._id) {
        await actions.updateActivity({
          ...values,
          coachId: coach._id,
        } as Activity);
      } else {
        await actions.createActivity({
          ...values,
          coachId: coach._id,
        } as Activity);
      }

      actions.getWeek({ config: { silent: true } });
    } catch (error) {
      const data = (error as AxiosError<SubmitErrorData>).response?.data;

      setFormErrors(data, setError as any, setSubmitError);
    }
  });

  const onDelete = async () => {
    const id = getValues()._id;

    if (id) {
      confirm({
        title: t("Confirm your action"),
        description: t("Are you sure you want to delete this activity?"),
        onConfirm: async () => {
          await actions.deleteActivity(id);

          actions.getWeek({ config: { silent: true } });
        },
      });
    }
  };

  return {
    models: {
      control,
      isDirty: formState.isDirty,
      isSubmitting: formState.isSubmitting,
      submitError,
      shouldShowStudents,
      isRepeatTypeAvailable,
    },
    operations: { handleSubmit: onSubmit, onDelete },
  };
};
