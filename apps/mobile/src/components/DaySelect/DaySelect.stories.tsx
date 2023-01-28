import React from "react";

import { storiesOf } from "@storybook/react-native";

import { DaySelect } from "./DaySelect";

storiesOf("Components", module).add("DaySelect", () => {
  return <DaySelect date={new Date()} onSelect={() => null} />;
});
