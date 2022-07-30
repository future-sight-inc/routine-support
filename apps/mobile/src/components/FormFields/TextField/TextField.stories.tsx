import React, { useEffect } from "react";

import { storiesOf } from "@storybook/react-native";
import { useForm } from "react-hook-form";

import { TextField } from "./TextField";

const Wrapper: React.FC = () => {
  const { control, getValues, watch } = useForm();

  watch();
  useEffect(() => {
    console.log(getValues());
  }, [control]);

  return <TextField name="name" control={control} label="Name" />;
};

storiesOf("Components/FormFields", module).add("TextField", () => {
  return <Wrapper />;
});
