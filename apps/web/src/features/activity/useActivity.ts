import { useState } from "react";

import { Activity, activityActions } from "@routine-support/domains";
import { Id } from "@routine-support/types";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { activityAPI } from "../../services/ApiService";

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
    } finally {
      setLoading(false);
    }
  };

  const updateActivity = async (activity: Activity) => {
    try {
      setLoading(true);

      await activityAPI.updateActivity(activity);

      setOpened(false);
    } finally {
      setLoading(false);
    }
  };

  const deleteActivity = async (id: Id) => {
    try {
      setLoading(true);

      await activityAPI.deleteActivity(id);

      setOpened(false);
    } finally {
      setLoading(false);
    }
  };

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
