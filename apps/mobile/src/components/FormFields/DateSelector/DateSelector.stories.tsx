import React from "react";

import { OverlayProvider } from "@react-native-aria/overlays";
import { storiesOf } from "@storybook/react-native";
import { useForm } from "react-hook-form";

import { DateSelector } from "./DateSelector";

const Wrapper: React.FC = () => {
  const { control } = useForm();

  return (
    <OverlayProvider>
      <DateSelector name="date" label="Date" control={control} />
    </OverlayProvider>
  );
};

storiesOf("Components/FormFields", module).add("DateSelector", () => {
  return <Wrapper />;
});
