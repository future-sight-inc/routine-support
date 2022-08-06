import React from "react";

import { OverlayProvider } from "@react-native-aria/overlays";
import { createMockCoach } from "@routine-support/domains";
import { storiesOf } from "@storybook/react-native";
import { Typography } from "apps/mobile/src/components/Typography";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Navigation } from "./Navigation";

storiesOf("Coach/MainLayout", module).add("Navigation", () => {
  return (
    <SafeAreaProvider>
      <OverlayProvider>
        <Navigation
          pressElement={<Typography>Press me</Typography>}
          coach={createMockCoach()}
          onLogout={() => null}
        />
      </OverlayProvider>
    </SafeAreaProvider>
  );
});
