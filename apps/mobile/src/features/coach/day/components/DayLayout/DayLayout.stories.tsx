import React from "react";

import { storiesOf } from "@storybook/react-native";
import { Text } from "react-native";

import { DayLayout } from "./DayLayout";

storiesOf("Coach/Day", module).add("DayLayout", () => {
  return (
    <DayLayout
      daySelect={<Text>Selector</Text>}
      filter={<Text>Filter</Text>}
      calendar={<Text>Calendar</Text>}
    />
  );
});
