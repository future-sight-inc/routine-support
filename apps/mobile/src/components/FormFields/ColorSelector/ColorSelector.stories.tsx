import React from "react";

import { storiesOf } from "@storybook/react-native";
import { useForm } from "react-hook-form";

import { ColorSelector } from "./ColorSelector";

const Wrapper: React.FC = () => {
  const { control } = useForm();

  return <ColorSelector name="name" control={control} label="Name" />;
};

storiesOf("Components/FormFields", module).add("ColorSelector", () => {
  return <Wrapper />;
});
