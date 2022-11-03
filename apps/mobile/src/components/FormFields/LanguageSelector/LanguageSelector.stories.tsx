import React from "react";

import { storiesOf } from "@storybook/react-native";
import { useForm } from "react-hook-form";

import { LanguageSelector } from "./LanguageSelector";

const Wrapper: React.FC = () => {
  const { control } = useForm();

  return <LanguageSelector name="name" control={control} label="Name" />;
};

storiesOf("Components/FormFields", module).add("LanguageSelector", () => {
  return <Wrapper />;
});
