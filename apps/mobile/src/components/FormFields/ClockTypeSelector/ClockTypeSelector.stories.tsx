import React from "react";

import { useForm } from "@routine-support/forms";
import { storiesOf } from "@storybook/react-native";

import { ClockTypeSelector } from "./ClockTypeSelector";

const Wrapper: React.FC = () => {
  const { control } = useForm();

  return <ClockTypeSelector name="name" control={control} label="Name" />;
};

storiesOf("Components/FormFields", module).add("ClockTypeSelector", () => {
  return <Wrapper />;
});
