import React from "react";

import { storiesOf } from "@storybook/react-native";
import { useForm } from "react-hook-form";

import { ActivityTypeSelector } from "./ActivityTypeSelector";

const Wrapper: React.FC = () => {
  const { control } = useForm();

  return <ActivityTypeSelector name="isCommon" label="Activity Type" control={control} />;
};

storiesOf("Components/FormFields", module).add("ActivityTypeSelector", () => {
  return <Wrapper />;
});
