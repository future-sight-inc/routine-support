import { useState } from "react";

import { useAppDispatch, useAppSelector } from "app/hooks";

import { activityActions } from "../activitySlice";
import { Activity } from "../types";

export const useActivity = () => {
  const [loading, setLoading] = useState(false);
  const [opened, setOpened] = useState(false);
  const { activity } = useAppSelector((state) => state.activity);
  const dispatch = useAppDispatch();

  const setActivity = (activity: Activity | null) => {
    dispatch(activityActions.setActivity(activity));
  };

  const createActivity = () => {};

  const updateActivity = () => {};

  const deleteActivity = () => {};

  const openActivityModal = (activity: Activity) => {
    setActivity(activity);
    setOpened(true);
  };

  const openNewActivityModal = () => {
    setActivity(null);
    setOpened(true);
  };

  const closeActivityModal = () => {
    setActivity(null);
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
