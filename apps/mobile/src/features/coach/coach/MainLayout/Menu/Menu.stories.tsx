import React from "react";

import { OverlayProvider } from "@react-native-aria/overlays";
import { storiesOf } from "@storybook/react-native";
import { Typography } from "apps/mobile/src/components/Typography";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Menu } from "./Menu";

storiesOf("Coach/MainLayout", module).add("Menu", () => {
  return (
    <SafeAreaProvider>
      <OverlayProvider>
        <Menu pressElement={<Typography>Press me</Typography>} />
      </OverlayProvider>
    </SafeAreaProvider>
  );
});
