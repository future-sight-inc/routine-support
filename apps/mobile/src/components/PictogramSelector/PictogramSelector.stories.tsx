import React from "react";

import { storiesOf } from "@storybook/react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { PictogramSelector } from "./PictogramSelector";

storiesOf("Components", module).add("PictogramSelector", () => {
  return (
    <SafeAreaProvider>
      <PictogramSelector onSelect={() => null} />
    </SafeAreaProvider>
  );
});
