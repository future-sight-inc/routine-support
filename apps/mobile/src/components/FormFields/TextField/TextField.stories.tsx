import React from "react";

import { useForm } from "@routine-support/forms";
import { storiesOf } from "@storybook/react-native";

import { TextField } from "./TextField";

const Wrapper: React.FC = () => {
  const { control } = useForm();

  return <TextField name="name" control={control} label="Name" />;
};

storiesOf("Components/FormFields", module).add("TextField", () => {
  return <Wrapper />;
});
