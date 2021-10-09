import { useEffect, useState } from "react";

import moment from "moment";
import { useForm } from "react-hook-form";

export const useActivityFormComponent = () =>
  // activity: Activity | null,
  // actions: ActivityFormActions
  {
    const { control, getValues, watch, setValue, handleSubmit } = useForm();
    const [minStartTime, setMinStartTime] = useState(moment());
    const [startDisabled, setStartDisabled] = useState(true);
    const [minEndTime, setMinEndTime] = useState(moment());
    const [endDisabled, setEndDisabled] = useState(true);

    useEffect(() => {
      watch((values, { name }) => {
        if (name === "start") {
          setMinEndTime(values[name]);
          setEndDisabled(!values[name]);
          setValue("end", values[name]);
        }

        if (name === "date") {
          setMinStartTime(values[name]);
          setStartDisabled(!values[name]);
        }
      });
    }, [watch]);

    const onSubmit = handleSubmit((values) => {
      console.log(values);
    });

    return {
      models: {
        control,
        minDate: moment(),
        minStartTime,
        startDisabled,
        minEndTime,
        endDisabled,
      },
      operations: { onSubmit },
    };
  };
