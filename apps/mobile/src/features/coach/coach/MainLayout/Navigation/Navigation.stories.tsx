import React from "react";

import { createMockCoach } from "@routine-support/domains";
import { storiesOf } from "@storybook/react-native";
import { Typography } from "apps/mobile/src/components/Typography";

import { Navigation } from "./Navigation";

storiesOf("Coach/MainLayout", module).add("Navigation", () => {
  return (
    <Navigation
      pressElement={<Typography>Press me</Typography>}
      coach={createMockCoach()}
      onLogout={() => null}
    />
  );
});
