import React from "react";

import { PICTOGRAMS } from "@routine-support/pictograms";
import { storiesOf } from "@storybook/react-native";
import { useForm } from "react-hook-form";

import { PictogramSelector } from "./PictogramSelector";

const Wrapper: React.FC = () => {
  const { control } = useForm();

  return (
    <PictogramSelector
      name="pictogram"
      label="Pictogram"
      control={control}
      pictograms={PICTOGRAMS}
    />
  );
};

storiesOf("Components/FormFields", module).add("PictogramSelector", () => {
  return <Wrapper />;
});
