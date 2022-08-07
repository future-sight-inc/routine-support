import React from "react";

import { storiesOf } from "@storybook/react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { ActivityModal } from "./ActivityModal";

storiesOf("Coach/Day", module).add("ActivityModal", () => {
  return (
    <SafeAreaProvider>
      <ActivityModal isOpened onClose={() => null} />
    </SafeAreaProvider>
  );
});
