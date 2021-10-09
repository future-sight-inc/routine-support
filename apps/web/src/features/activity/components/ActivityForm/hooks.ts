import moment from "moment";
import { useForm } from "react-hook-form";

import { ActivityFormModels } from "./ActivityForm";

export const useActivityFormComponent = (models: ActivityFormModels) =>
  // activity: Activity | null,
  // actions: ActivityFormActions
  {
    const { control, handleSubmit } = useForm<any>({
      defaultValues: { date: moment(), start: moment(), end: null },
      ...models.activity,
    });

    const onSubmit = handleSubmit((values) => {
      console.log(values);
    });

    return {
      models: {
        control,
        minDate: moment(),
      },
      operations: { onSubmit },
    };
  };
