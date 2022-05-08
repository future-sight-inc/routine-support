import { useState } from "react";

import { Activity } from "@routine-support/domains";
import { Id } from "@routine-support/types";

import { activityAPI } from "../../services/ApiService";

export const useActivity = () => {
  const [loading, setLoading] = useState(false);
  const [opened, setOpened] = useState(false);
  const [activity, setActivity] = useState<Activity | undefined>();

  const createActivity = async (activity: Activity) => {
    try {
      setLoading(true);

      await activityAPI.createActivity(activity);

      setOpened(false);
    } finally {
      setLoading(false);
      setActivity(undefined);
    }
  };

  const updateActivity = async (activity: Activity) => {
    try {
      setLoading(true);

      await activityAPI.updateActivity(activity);

      setOpened(false);
    } finally {
      setLoading(false);
      setActivity(undefined);
    }
  };

  const deleteActivity = async (id: Id) => {
    try {
      setLoading(true);

      await activityAPI.deleteActivity(id);

      setOpened(false);
    } finally {
      setLoading(false);
      setActivity(undefined);
    }
  };

  const openActivityModal = (activity: Activity) => {
    setActivity(activity);
    setOpened(true);
  };

  const openNewActivityModal = (activityToOpen?: Partial<Activity>) => {
    setActivity({ ...activity, ...activityToOpen } as Activity);
    setOpened(true);
  };

  const closeActivityModal = () => {
    setActivity(undefined);
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
