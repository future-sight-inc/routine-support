import React from "react";

import { Activity } from "features/activity/types";

import { useActivityFormComponent } from "./useActivityFormComponent";

export interface ActivityFormActions {}

export interface ActivityFormProps {
  activity: Activity | null;
  actions: ActivityFormActions;
}

export const ActivityForm: React.FC<ActivityFormProps> = ({
  activity,
  actions,
}) => {
  const {
    models,
    operations: { register },
  } = useActivityFormComponent(activity, actions);

  return (
    <form>
      <input type="text" {...register("title")} />
      <input type="text" {...register("pictogram")} />
      <input type="text" {...register("date")} />
      <input type="text" {...register("time")} />
    </form>
  );
};
