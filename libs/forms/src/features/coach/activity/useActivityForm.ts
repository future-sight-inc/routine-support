import { useEffect, useState } from "react";

import { Activity, Coach, RepeatTypeEnum } from "@routine-support/domains";
import { PICTOGRAMS } from "@routine-support/pictograms";
import { AxiosError } from "axios";
import moment from "moment";
import { useForm } from "react-hook-form";
import { setFormErrors } from "@routine-support/forms";
import { SubmitErrorData } from "@routine-support/types";

export const useActivityForm = (
  coach: Coach,
  activity: Partial<Activity> | undefined,
  actions: {
    createActivity: (activity: Activity) => Promise<void>;
    updateActivity: (activity: Activity) => Promise<void>;
    deleteActivity: (id: string) => Promise<void>;
    updateCalendar: (data: { config?: { silent: boolean } }) => void;
  }
) => {
  const defaultValues = {
    date: moment(),
    start: moment(),
    end: moment().add("hours", 1),
    isCommon: true,
    repeatType: RepeatTypeEnum.None,
    students: [],
  };
  // ! баг в react-hook-form
  const { control, handleSubmit, formState, setError, setValue, watch, reset } = useForm<any>({
    defaultValues,
  });

  const [submitError, setSubmitError] = useState<string | undefined>();

  const [isStudentsSelectorVisible, setStudentsSelectorVisible] = useState(!defaultValues.isCommon);

  useEffect(() => {
    if (activity) {
      Object.keys(activity).forEach((key) => {
        setValue(key, activity[key]);
      });
    } else {
      reset();
    }
  }, [activity]);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "isCommon") {
        setStudentsSelectorVisible(!value.isCommon);

        setError("students", {});

        if (value.isCommon) {
          setValue("students", []);
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

      actions.updateCalendar({ config: { silent: true } });
    } catch (error) {
      const data = (error as AxiosError<SubmitErrorData>).response?.data;

      setFormErrors(data, setError, setSubmitError);
    }
  });

  const onDelete = async () => {
    if (activity?._id) {
      await actions.deleteActivity(activity?._id as string);

      actions.updateCalendar({ config: { silent: true } });
    }
  };

  return {
    models: {
      control,
      isDirty: formState.isDirty,
      isSubmitting: formState.isSubmitting,
      submitError,
      isStudentsSelectorVisible,
      pictograms: PICTOGRAMS,
      repeatTypeOptions: [
        { text: "Never", value: RepeatTypeEnum.None },
        { text: "Every day", value: RepeatTypeEnum.EveryDay },
        { text: "Every week", value: RepeatTypeEnum.EveryWeek },
        { text: "Every month", value: RepeatTypeEnum.EveryMonth },
        { text: "Every year", value: RepeatTypeEnum.EveryYear },
      ],
    },
    operations: { onSubmit, onDelete },
  };
};
