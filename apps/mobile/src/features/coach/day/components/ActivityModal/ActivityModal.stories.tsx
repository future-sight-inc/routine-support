import React from "react";

import { PICTOGRAMS } from "@routine-support/pictograms";
import { storiesOf } from "@storybook/react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { ActivityModal } from "./ActivityModal";

storiesOf("Coach/Day", module).add("ActivityModal", () => {
  return (
    <SafeAreaProvider>
      <ActivityModal isOpened onClose={() => null} pictograms={PICTOGRAMS} />
    </SafeAreaProvider>
  );
});
