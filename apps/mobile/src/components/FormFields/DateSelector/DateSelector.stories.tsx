import React from "react";

import { storiesOf } from "@storybook/react-native";
import { useForm } from "react-hook-form";

import { DateSelector } from "./DateSelector";

const Wrapper: React.FC = () => {
  const { control } = useForm();

  return <DateSelector name="date" label="Date" control={control} />;
};

storiesOf("Components/FormFields", module).add("DateSelector", () => {
  return <Wrapper />;
});
