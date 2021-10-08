import { useForm } from "react-hook-form";

export const useActivityFormComponent = () =>
  // activity: Activity | null,
  // actions: ActivityFormActions
  {
    // const { register } = useForm({ defaultValues: activity || {} });
    const { control } = useForm();

    return {
      models: { control },
      operations: {},
    };
  };
