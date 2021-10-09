import { useState } from "react";

import { useAppDispatch, useAppSelector } from "app/hooks";
import { toast } from "react-toastify";

import { activityAPI } from "../activityAPI";
import { activityActions } from "../activitySlice";
import { Activity } from "../types";

export const useActivity = () => {
  const [loading, setLoading] = useState(false);
  const [opened, setOpened] = useState(false);
  const { activity } = useAppSelector((state) => state.activity);
  const dispatch = useAppDispatch();

  const setActivity = (activity?: Partial<Activity>) => {
    dispatch(activityActions.setActivity(activity || null));
  };

  const createActivity = async (activity: Activity) => {
    try {
      setLoading(true);

      await activityAPI.createActivity(activity);

      setOpened(false);

      toast.success("Activity added!");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const updateActivity = () => {};

  const deleteActivity = () => {};

  const openActivityModal = (activity: Activity) => {
    setActivity(activity);
    setOpened(true);
  };

  const openNewActivityModal = (activity?: Partial<Activity>) => {
    setActivity(activity);
    setOpened(true);
  };

  const closeActivityModal = () => {
    setActivity();
    setOpened(false);
  };

  return {
    models: {
      activity,
      opened,
      loading,
    },
    operations: {
      setActivity,
      createActivity,
      updateActivity,
      deleteActivity,
      openActivityModal,
      openNewActivityModal,
      closeActivityModal,
    },
  };
};
