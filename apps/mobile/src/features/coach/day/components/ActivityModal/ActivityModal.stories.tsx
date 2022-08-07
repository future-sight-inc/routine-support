import React from "react";

import { OverlayProvider } from "@react-native-aria/overlays";
import { storiesOf } from "@storybook/react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { ActivityModal } from "./ActivityModal";

storiesOf("Coach/Day", module).add("ActivityModal", () => {
  return (
    <OverlayProvider>
      <SafeAreaProvider>
        <ActivityModal isOpened onClose={() => null} />
      </SafeAreaProvider>
    </OverlayProvider>
  );
});
