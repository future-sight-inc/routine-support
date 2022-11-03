import React from "react";

import { storiesOf } from "@storybook/react-native";
import { useForm } from "react-hook-form";

import { ClockTypeSelector } from "./ClockTypeSelector";

const Wrapper: React.FC = () => {
  const { control } = useForm();

  return <ClockTypeSelector name="name" control={control} label="Name" />;
};

storiesOf("Components/FormFields", module).add("ClockTypeSelector", () => {
  return <Wrapper />;
});
