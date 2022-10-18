import React from "react";

import { storiesOf } from "@storybook/react-native";
import { useForm } from "react-hook-form";

import { TextField } from "./TextField";

const Wrapper: React.FC = () => {
  const { control } = useForm();

  return <TextField name="name" control={control} label="Name" />;
};

storiesOf("Components/FormFields", module).add("TextField", () => {
  return <Wrapper />;
});
