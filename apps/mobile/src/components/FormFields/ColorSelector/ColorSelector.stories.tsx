import React from "react";

import { useForm } from "@routine-support/forms";
import { storiesOf } from "@storybook/react-native";

import { ColorSelector } from "./ColorSelector";

const Wrapper: React.FC = () => {
  const { control } = useForm();

  return <ColorSelector name="name" control={control} label="Name" />;
};

storiesOf("Components/FormFields", module).add("ColorSelector", () => {
  return <Wrapper />;
});
