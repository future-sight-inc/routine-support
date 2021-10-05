import { Activity } from "features/activity/types";
import { useForm } from "react-hook-form";
import { ActivityFormActions } from "./ActivityForm";

export const useActivityFormComponent = (
  activity: Activity | null,
  actions: ActivityFormActions
) => {
  const { register } = useForm({ defaultValues: activity || {} });

  return {
    models: {},
    operations: { register },
  };
};
