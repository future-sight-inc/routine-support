import { useState } from "react";

import { Activity, RepeatTypeEnum } from "@routine-support/domains";
import { PICTOGRAMS } from "@routine-support/pictograms";
import { coachActivityAPI } from "apps/mobile/src/services/ApiService";

export const useActivity = () => {
  const [loading, setLoading] = useState(false);
  const [isOpened, setOpened] = useState(false);
  const [activity, setActivity] = useState<Activity | undefined>();

  const createActivity = async (activity: Activity) => {
    try {
      setLoading(true);

      await coachActivityAPI.createActivity(activity);

      setOpened(false);
    } finally {
      setLoading(false);
      setActivity(undefined);
    }
  };

  const updateActivity = async (activity: Activity) => {
    try {
      setLoading(true);

      await coachActivityAPI.updateActivity(activity);

      setOpened(false);
    } finally {
      setLoading(false);
      setActivity(undefined);
    }
  };

  const deleteActivity = async (id: string) => {
    try {
      setLoading(true);

      await coachActivityAPI.deleteActivity(id);

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
      loading,
      pictograms: PICTOGRAMS,
      repeatTypeOptions: [
        { text: "Never", value: RepeatTypeEnum.None },
        { text: "Every day", value: RepeatTypeEnum.EveryDay },
        { text: "Every week", value: RepeatTypeEnum.EveryWeek },
        { text: "Every month", value: RepeatTypeEnum.EveryMonth },
        { text: "Every year", value: RepeatTypeEnum.EveryYear },
      ],
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
