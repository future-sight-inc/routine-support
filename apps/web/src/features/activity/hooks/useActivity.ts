import { useAppDispatch, useAppSelector } from "app/hooks";
import { useState } from "react";
import { activityActions } from "../activitySlice";
import { Activity } from "../types";

export const useActivity = () => {
  const [loading, setLoading] = useState(false);
  const [opened, setOpened] = useState(false);
  const { activity } = useAppSelector((state) => state.activity);
  const dispatch = useAppDispatch();

  const openActivityModal = (activity: Activity) => {
    dispatch(activityActions.setActivity(activity));
    setOpened(true);
  };

  const openNewActivityModal = () => {
    dispatch(activityActions.setActivity(null));
    setOpened(true);
  };

  const closeActivityModal = () => {
    dispatch(activityActions.setActivity(null));
    setOpened(false);
  };

  const createActivity = () => {};

  const updateActivity = () => {};

  const deleteActivity = () => {};

  return {
    models: {
      activity,
      loading,
      opened,
    },
    operation: {
      openActivityModal,
      openNewActivityModal,
      createActivity,
      updateActivity,
      deleteActivity,
    },
  };
};
