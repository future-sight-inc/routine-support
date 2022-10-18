import React from "react";

import { PICTOGRAMS } from "@routine-support/pictograms";
import { storiesOf } from "@storybook/react-native";
import { useForm } from "react-hook-form";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { PictogramSelector } from "./PictogramSelector";

const Wrapper: React.FC = () => {
  const { control } = useForm();

  return (
    <SafeAreaProvider>
      <PictogramSelector
        name="pictogram"
        label="Pictogram"
        control={control}
        pictograms={PICTOGRAMS}
      />
    </SafeAreaProvider>
  );
};

storiesOf("Components/FormFields", module).add("PictogramSelector", () => {
  return <Wrapper />;
});
