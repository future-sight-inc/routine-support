import React from "react";

import { OverlayProvider } from "@react-native-aria/overlays";
import { storiesOf } from "@storybook/react-native";

import { Typography } from "../Typography";
import { DateSelector } from "./DateSelector";

storiesOf("Components", module).add("DateSelector", () => {
  return (
    <OverlayProvider>
      <DateSelector
        onSelect={(value) => console.log(value)}
        pressElement={<Typography>Press to open</Typography>}
      />
    </OverlayProvider>
  );
});
