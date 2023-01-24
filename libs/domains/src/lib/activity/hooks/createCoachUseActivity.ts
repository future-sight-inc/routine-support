import { PICTOGRAMS } from "@routine-support/pictograms";
import { useState } from "react";
import { createCoachActivityAPI } from "../api";
import { Activity } from "../types";

interface Deps {
  activityApi: ReturnType<typeof createCoachActivityAPI>;
}

const useActivity = ({ activityApi }: Deps) => {
  const [isLoading, setLoading] = useState(false);
  const [isOpened, setOpened] = useState(false);
  const [activity, setActivity] = useState<Activity | undefined>();

  const createActivity = async (activity: Activity) => {
    try {
      setLoading(true);

      await activityApi.createActivity(activity);

      setOpened(false);
    } finally {
      setLoading(false);
      setActivity(undefined);
    }
  };

  const updateActivity = async (activity: Activity) => {
    try {
      setLoading(true);

      await activityApi.updateActivity(activity);

      setOpened(false);
    } finally {
      setLoading(false);
      setActivity(undefined);
    }
  };

  const deleteActivity = async (id: string) => {
    try {
      setLoading(true);

      await activityApi.deleteActivity(id);

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
      isOpened,
      isLoading,
      pictograms: PICTOGRAMS,
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

export const createCoachUseActivity = (deps: Deps) => () => useActivity(deps);
